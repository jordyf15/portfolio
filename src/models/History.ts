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
  category: Category;
  roleEN: string;
  dateEN: string;
  institutionEN: string;
  pointsEN?: string[];
  roleJP: string;
  dateJP: string;
  institutionJP: string;
  pointsJP?: string[];
  technologies?: Technology[];
}
