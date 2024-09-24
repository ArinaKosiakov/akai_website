import {
  Button,
  Head,
  Html,
  Body,
  Heading,
  Text,
} from "@react-email/components";
import * as React from "react";

export default function Contact({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  return (
    <Html>
      <Head>
        <title>{`New form submission from ${name}`}</title>
      </Head>
      <Body>
        <Heading>You have a new mail from {name}</Heading>
        <Text>Sender email: {email}</Text>
        <Text>Message: {message}</Text>
      </Body>
    </Html>
  );
}
