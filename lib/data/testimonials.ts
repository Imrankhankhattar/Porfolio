// No real recommendations were available in the source resume/LinkedIn export.
// Add real quotes here — the Recommendations section on the homepage hides
// itself automatically while this stays empty.
export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
};

export const testimonials: Testimonial[] = [];
