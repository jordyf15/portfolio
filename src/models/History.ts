type Category = "Work" | "Education" | "Organization";

export default interface History {
  role: string;
  date: string;
  institution: string;
  category: Category;
}