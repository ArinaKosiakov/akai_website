//funzioni di cose da client a server
"use server";

import { Resend } from "resend";
import Contact from "../emails/Contact";
import { toast } from "react-toastify";
import axios from "axios";

const resend = new Resend(process.env.RESEND_KEY);

type ContactSubmissionProps = {
  success: boolean;
  message: string;
};

export const handleContactSubmission = async (
  formData: FormData,
): Promise<ContactSubmissionProps> => {
  const rawFormData = {
    name: formData.get("name")!.toString(),
    email: formData.get("email")!.toString(),
    message: formData.get("message")!.toString(),
  };

  if (
    rawFormData.name === "" ||
    rawFormData.email === "" ||
    rawFormData.message === ""
  ) {
    return { success: false, message: "All the fields must be filled!" };
  }
  const API_KEY = process.env.EMAIL_VALIDATION_KEY;
  // email validation
  const validateEmail = async (email: string) => {
    try {
      const response = await axios.get(
        `https://emailvalidation.abstractapi.com/v1/?api_key=${API_KEY}&email=${email}`,
      );
      console.log(response.data);

      return (
        response.data.is_valid_format?.value === true &&
        response.data.is_disposable_email?.value === false &&
        response.data.is_smtp_valid?.value === true
      ); // Returns true if the email format is valid
    } catch (error) {
      console.error("Error during email validation:", error);
      return false; // If there’s an error, treat the email as invalid
    }
  };

  const validEmail = await validateEmail(rawFormData.email);
  // const validEmail = false;

  if (validEmail) {
    try {
      await resend.emails.send({
        from: "contact form <noreply@contacts.dullakai.com>",
        to: process.env.PERSONAL_EMAIL!,
        subject: "New contact submission",
        react: (
          <Contact
            name={rawFormData.name}
            email={rawFormData.email}
            message={rawFormData.message}
          />
        ),
      });

      return { success: true, message: "Email sent successfully!" };
    } catch (err) {
      return { success: false, message: "Failed to send email. Try again." };
    }
  } else {
    return {
      success: false,
      message: "Invalid email address.",
    };
  }
};
