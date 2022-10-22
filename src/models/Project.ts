type Type = "frontend" | "backend" | "android" | "other" | "fullstack";

type Language = "kotlin" | "javascript" | "ruby" | "go" | "typescript";

type Technology =
  | "React"
  | "MongoDB"
  | "Redux"
  | "Express"
  | "Gin"
  | "Redis"
  | "Postgres"
  | "Hapi"
  | "D3js";

export default interface Project {
  id: string;
  title: string;
  description: string;
  type: Type;
  language: Language;
  technologies: Array<Technology>;
  demoUrl: string;
  repoUrl: string;
  imageUrl: string;
}
