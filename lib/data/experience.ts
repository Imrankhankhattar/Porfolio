// Real work history from resume + LinkedIn export.
export type ExperienceEntry = {
  id: string;
  role: string;
  company: string;
  start: string;
  end: string;
  current?: boolean;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    id: "deline-media",
    role: "Senior Software Engineer",
    company: "Deline Media",
    start: "May 2026",
    end: "Present",
    current: true,
    bullets: ["Lahore, Pakistan"],
  },
  {
    id: "tkxel-senior",
    role: "Senior Software Engineer",
    company: "Tkxel",
    start: "Oct 2025",
    end: "May 2026",
    bullets: [
      "Engineered a cross-platform in-app purchase subscription system for iOS and Android, with event-driven handlers for grace period, on-hold, cancellation, and renewal lifecycle states",
      "Architected and led a V1 → V2 production data migration framework spanning 15+ entity types, with checkpoint-based idempotency and minimal-downtime rollout",
      "Mentored junior engineers and interns on software development fundamentals and modern development workflows",
    ],
  },
  {
    id: "tkxel-swe",
    role: "Software Engineer",
    company: "Tkxel",
    start: "Jun 2022",
    end: "Oct 2025",
    bullets: [
      "Reduced Redis memory footprint from 6GB to 0.2GB — a 75% AWS ElastiCache cost reduction — while achieving 3x faster response times",
      "Built a comprehensive ELK-stack logging and monitoring service, cutting troubleshooting time by 50%",
      "Redesigned the scheduling microservice with event-driven patterns, improving system reliability by 40%",
      "Engineered a MySQL + React integration layer with connection pooling, delivering a 4x improvement in API response times",
    ],
  },
  {
    id: "gosaas",
    role: "Software Engineer Intern",
    company: "GoSaaS, Inc.",
    start: "Feb 2022",
    end: "Mar 2022",
    bullets: [
      "Worked on backend services and UI components using Spring Boot and Oracle JET/Knockout.js",
      "Learned RESTful API development, dependency injection principles, and enterprise architecture best practices",
    ],
  },
];
