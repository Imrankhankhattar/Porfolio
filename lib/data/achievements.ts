export type Achievement = {
  id: string;
  category: string;
  title: string;
  detail: string;
  date?: string;
};

export const achievements: Achievement[] = [
  {
    id: "redis-cost",
    category: "Cost Optimization",
    title: "75% AWS ElastiCache Cost Reduction",
    detail:
      "Rearchitected Redis caching infrastructure, cutting memory footprint from 6GB to 0.2GB while achieving 3x faster response times.",
    date: "2022 – 2025",
  },
  {
    id: "api-perf",
    category: "Performance",
    title: "4x Faster API Response Times",
    detail:
      "Engineered a MySQL integration layer with connection pooling and query optimization for React-based applications.",
    date: "2022 – 2025",
  },
  {
    id: "scheduling-reliability",
    category: "Reliability",
    title: "40% System Reliability Improvement",
    detail:
      "Redesigned the scheduling microservice with event-driven patterns, reducing server load and resource consumption.",
    date: "2022 – 2025",
  },
  {
    id: "elk-monitoring",
    category: "Observability",
    title: "50% Faster Troubleshooting",
    detail:
      "Built a comprehensive logging and monitoring service on the ELK stack, giving the team real-time system health visibility.",
    date: "2022 – 2025",
  },
  {
    id: "v1-v2-migration",
    category: "Technical Leadership",
    title: "V1 → V2 Production Data Migration",
    detail:
      "Architected and led a migration framework spanning 15+ entity types, with checkpoint-based idempotency and minimal-downtime rollout.",
    date: "2025 – Present",
  },
  {
    id: "mentorship",
    category: "Leadership",
    title: "Engineering Mentorship",
    detail:
      "Mentor junior engineers and interns on software development fundamentals, clean code principles, and modern development workflows.",
    date: "2025 – Present",
  },
];
