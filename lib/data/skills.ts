// `icon` maps to a slug resolved via `iconSource` (see lib/devicon.ts and
// lib/simple-icons.ts) and rendered as an <img> badge. Leave `icon` empty for
// pure-concept skills with no real logo — TechBadge falls back to a Lucide icon.
export type IconSource = "devicon" | "simple-icons";
export type Skill = { name: string; icon: string; iconSource?: IconSource };
export type SkillCategory = { id: string; label: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    label: "Backend",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express.js", icon: "express" },
      { name: "RESTful APIs", icon: "" },
      { name: "Microservices Architecture", icon: "" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { name: "Angular", icon: "angularjs" },
      { name: "React", icon: "react" },
      { name: "TypeScript", icon: "typescript" },
      { name: "HTML", icon: "html5" },
      { name: "CSS", icon: "css3" },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    skills: [
      { name: "MySQL", icon: "mysql" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Redis", icon: "redis" },
      { name: "Database Design", icon: "" },
      { name: "Query Optimization", icon: "" },
    ],
  },
  {
    id: "cloud-devops",
    label: "Cloud & DevOps",
    skills: [
      { name: "AWS Lambda", icon: "amazonwebservices" },
      { name: "AWS S3", icon: "amazonwebservices" },
      { name: "AWS CloudWatch", icon: "amazonwebservices" },
      { name: "Docker", icon: "docker" },
      { name: "Git", icon: "git" },
      { name: "GitHub Actions", icon: "githubactions" },
    ],
  },
  {
    id: "ai-tooling",
    label: "AI Tooling",
    skills: [
      { name: "Claude Code", icon: "claude", iconSource: "simple-icons" },
      { name: "Cursor", icon: "cursor", iconSource: "simple-icons" },
      { name: "GitHub Copilot", icon: "githubcopilot", iconSource: "simple-icons" },
      { name: "Prompt Engineering", icon: "" },
    ],
  },
  {
    id: "monitoring-logging",
    label: "Monitoring & Logging",
    skills: [
      { name: "Elasticsearch", icon: "elasticsearch" },
      { name: "Logstash", icon: "logstash" },
      { name: "Kibana", icon: "kibana" },
      { name: "Sentry", icon: "sentry" },
    ],
  },
];
