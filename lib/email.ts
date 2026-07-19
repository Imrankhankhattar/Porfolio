import { Resend } from "resend";
import { site } from "@/lib/data/site";

export function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

export async function sendContactEmail(input: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const resend = getResendClient();
  if (!resend) {
    throw new Error(
      "RESEND_API_KEY is not set. Sign up at resend.com, create an API key, and add it to .env.local."
    );
  }

  return resend.emails.send({
    from: "Portfolio Contact Form <onboarding@resend.dev>",
    to: site.email,
    replyTo: input.email,
    subject: `[Portfolio Contact] ${input.subject}`,
    text: `From: ${input.name} <${input.email}>\n\n${input.message}`,
  });
}
