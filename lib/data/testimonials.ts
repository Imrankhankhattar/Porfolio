// Real LinkedIn recommendations.
export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "umair-malik",
    quote:
      "I worked closely with Imran on a joint project between Techfoot and Tkxel. Joining as a fresh graduate, he stood out as a quiet, disciplined, and highly determined engineer. Technically, he delivered outstanding, lasting impact. He restructured a critical production microservice we call \"scheduler\" from a fragile single-app/single-DB setup into a more scalable architecture with multiple application nodes. The service has continued running flawlessly in production — handling live traffic without any downtime or incidents — even long after he left the team. It became the example I regularly share with my teammates about what solid, future-proof engineering looks like. Imran is a reliable, thoughtful, and high-performing engineer I'd gladly work with again. Highly recommended.",
    author: "Umair Malik",
    role: "Building Billspree — managed Imran directly at Tkxel",
  },
  {
    id: "hassan-iftikhar",
    quote:
      "Imran Khan is a proficient Software Engineer with a strong grasp on Node.js, Angular and ROR. Highly recommended for any software development endeavor.",
    author: "Hassan Iftikhar",
    role: "Data Scientist, MSc @ Skoltech — studied with Imran",
  },
];
