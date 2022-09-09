type Type = "Front-end" | "Back-end" | "Android" | "Other" | "Full Stack";

type Language = "Kotlin" | "Javascript" | "Ruby" | "Go";

type Technology = "React" | "Typescript" | "MongoDB" | "Redux" | "Express" | "Gin" | "Redis" | "Postgres" | "Hapi" | "D3js";

export default interface Project {
  title: string;
  description: string;
  type: Type;
  language: Language;
  technologies: Array<Technology>;
  demoUrl: string;
  repoUrl: string;
  imageUrl: string;
}