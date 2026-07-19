export type EducationEntry = {
  id: string;
  degree: string;
  institution: string;
  start: string;
  end: string;
  detail?: string;
};

export const education: EducationEntry[] = [
  {
    id: "bs-cs",
    degree: "Bachelor of Science in Computer Science",
    institution: "Namal Institute",
    start: "Oct 2018",
    end: "May 2022",
    detail: "GPA: 3.45/4.00",
  },
];
