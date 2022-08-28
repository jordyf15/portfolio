type Type = "Front-end" | "Back-end" | "Android";

type Language = "Kotlin" | "Javascript" | "Ruby" | "Go";

type Technology = "React" | "";

export default interface Project {
  title: string;
  description: string;
  type: Type;
  language: Language;
  technologies: [Technology];
  demoUrl: string;
  repoUrl: string;
}