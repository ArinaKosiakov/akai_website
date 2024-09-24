//funzioni di cose da client a server
"use server";

import { Resend } from "resend";
import Contact from "../emails/Contact";

const resend = new Resend(process.env.RESEND_KEY);

export async function handleContactSubmission(formData: FormData) {
  const rawFormData = {
    name: formData.get("name")!.toString(),
    email: formData.get("email")!.toString(),
    message: formData.get("message")!.toString(),
  };

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
}
