// Value propositions derived from real experience (see lib/data/achievements.ts).
export type Service = {
  id: string;
  icon: "ServerCog" | "Gauge" | "Layers" | "Activity";
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    id: "backend-architecture",
    icon: "ServerCog",
    title: "Backend Architecture",
    description:
      "Event-driven microservices and RESTful APIs designed to scale — built with Node.js, Express, and clean separation of concerns.",
  },
  {
    id: "performance-cost",
    icon: "Gauge",
    title: "Performance & Cost Optimization",
    description:
      "Caching strategy, query optimization, and infrastructure right-sizing. Track record: 75% AWS cost cut, 4x faster API responses.",
  },
  {
    id: "fullstack-delivery",
    icon: "Layers",
    title: "Full-Stack Delivery",
    description:
      "End-to-end features across React/Angular front ends and Node.js/MySQL back ends, shipped fast without cutting corners.",
  },
  {
    id: "observability-reliability",
    icon: "Activity",
    title: "Observability & Reliability",
    description:
      "ELK-stack monitoring and event-driven redesigns that cut troubleshooting time and keep systems reliable under load.",
  },
];
