type Category = "Work" | "Education" | "Organization";

type Technology =
  | "HTML"
  | "CSS"
  | "Javascript"
  | "Typescript"
  | "React"
  | "Gin"
  | "Golang"
  | "Ruby"
  | "Ruby on Rails"
  | "Express"
  | "Firebase"
  | "MongoDB"
  | "PostgreSQL"
  | "Redis";

export default interface History {
  id: string;
  role: string;
  date: string;
  institution: string;
  category: Category;
  points?: string[];
  technologies?: Technology[];
}
