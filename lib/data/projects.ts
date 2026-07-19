// Case studies drawn from real professional work (Tkxel, 2022–present).
// No public repos/demos exist for these — they're proprietary employer projects.
export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  achievements: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "iap-subscription-system",
    title: "Cross-Platform In-App Purchase System",
    description:
      "Subscription billing system spanning iOS (Apple App Store Server API) and Android (Google Play Billing).",
    longDescription:
      "Engineered a cross-platform in-app purchase subscription system for iOS and Android, implementing event-driven handlers for grace period, on-hold, cancellation, and renewal lifecycle states to ensure accurate subscription state across both platforms at all times.",
    image: "/projects/iap-subscription-system.svg",
    tags: ["Node.js", "TypeScript", "Apple App Store Server API", "Google Play Billing"],
    achievements: [
      "Event-driven handlers for grace period, on-hold, cancellation, and renewal states",
      "Accurate subscription state across iOS and Android",
    ],
    featured: true,
  },
  {
    slug: "v1-v2-data-migration",
    title: "V1 → V2 Production Data Migration Framework",
    description: "Migration framework spanning 15+ entity types with checkpoint-based idempotency.",
    longDescription:
      "Architected and led a production data migration framework covering 15+ entity types, built around checkpoint-based idempotency and multi-layer verification to guarantee correctness during a minimal-downtime rollout.",
    image: "/projects/v1-v2-data-migration.svg",
    tags: ["Node.js", "MySQL", "PostgreSQL"],
    achievements: [
      "15+ entity types migrated with checkpoint-based idempotency",
      "Multi-layer verification and minimal-downtime rollout",
    ],
    featured: true,
  },
  {
    slug: "redis-cost-optimization",
    title: "Redis Cost & Performance Overhaul",
    description: "Rearchitected caching infrastructure to cut cost and improve response times.",
    longDescription:
      "Rearchitected Redis caching infrastructure with optimized data structures and TTL policies, reducing memory footprint from 6GB to 0.2GB — a 75% AWS ElastiCache cost reduction — while achieving 3x faster response times and maintaining database consistency.",
    image: "/projects/redis-cost-optimization.svg",
    tags: ["Redis", "AWS ElastiCache", "Node.js"],
    achievements: ["75% AWS ElastiCache cost reduction", "3x faster response times"],
    featured: true,
  },
  {
    slug: "elk-monitoring-service",
    title: "ELK Logging & Monitoring Service",
    description: "Centralized logging and monitoring platform for real-time system health visibility.",
    longDescription:
      "Architected and developed a comprehensive logging and monitoring service using the ELK stack (Elasticsearch, Logstash, Kibana), reducing troubleshooting time by 50% and enabling real-time system health visibility for the engineering team.",
    image: "/projects/elk-monitoring-service.svg",
    tags: ["Elasticsearch", "Logstash", "Kibana", "Sentry"],
    achievements: ["50% reduction in troubleshooting time", "Real-time system health visibility"],
  },
  {
    slug: "scheduling-microservice-redesign",
    title: "Event-Driven Scheduling Microservice Redesign",
    description: "Redesigned scheduling architecture around event-driven patterns.",
    longDescription:
      "Redesigned the scheduling microservice architecture, implementing event-driven patterns and optimized database queries — improving system reliability by 40% and significantly reducing server load and resource consumption.",
    image: "/projects/scheduling-microservice-redesign.svg",
    tags: ["Node.js", "Microservices", "MySQL"],
    achievements: ["40% system reliability improvement", "Reduced server load and resource consumption"],
  },
  {
    slug: "mysql-react-integration",
    title: "MySQL + React Integration Layer",
    description: "Database integration layer with connection pooling and query optimization.",
    longDescription:
      "Engineered a database integration layer for MySQL and React-based applications, implementing connection pooling and query optimization techniques that resulted in a 4x improvement in API response times for critical services.",
    image: "/projects/mysql-react-integration.svg",
    tags: ["MySQL", "React", "Node.js"],
    achievements: ["4x improvement in API response times", "Connection pooling and query optimization"],
  },
];
