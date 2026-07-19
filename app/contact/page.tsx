import type { Metadata } from "next";
import { site } from "@/lib/data/site";
import { ContactForm } from "@/components/contact-form";
import { SocialLinks } from "@/components/social-links";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: `Contact — ${site.name}`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <Reveal>
        <h1 className="text-3xl font-bold">Get In Touch</h1>
        <p className="mt-2 text-foreground/60">
          Have a question or want to work together? Send me a message.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-10 sm:grid-cols-[1.4fr_1fr]">
        <Reveal delay={0.05}>
          <ContactForm />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-sm font-medium">Direct Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-foreground/60">
            <li>{site.email}</li>
            <li>{site.phone}</li>
            <li>{site.location}</li>
          </ul>
          <SocialLinks className="mt-4" />
        </Reveal>
      </div>
    </div>
  );
}
