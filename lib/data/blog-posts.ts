// External posts published on Medium — link out rather than mirror content.
export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  url: string;
  date: string;
  readingTime: string;
  tags: string[];
};

export const blogPosts: BlogPost[] = [
  {
    id: "js-variable-hoisting",
    title: "Mastering JavaScript Variable Hoisting: A Deeper Dive into var, let, and const Behaviors",
    excerpt:
      "How JavaScript hoists var, let, and const differently, and the execution-context quirks that trip up even experienced developers.",
    url: "https://medium.com/@imrank2018/mastering-javascript-variable-hoisting-a-deeper-dive-into-var-let-and-const-behaviors-a7685842f2fd",
    date: "Aug 26, 2023",
    readingTime: "5 min read",
    tags: ["JavaScript", "Hoisting", "Execution Context"],
  },
];
