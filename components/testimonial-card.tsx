import type { Testimonial } from "@/lib/data/testimonials";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="rounded-lg border border-black/10 p-5 dark:border-white/10">
      <blockquote className="text-sm text-foreground/70">&ldquo;{testimonial.quote}&rdquo;</blockquote>
      <figcaption className="mt-3 text-sm">
        <span className="font-medium">{testimonial.author}</span>
        <span className="text-foreground/50"> — {testimonial.role}</span>
      </figcaption>
    </figure>
  );
}
