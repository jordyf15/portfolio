type Category = "Work" | "Education" | "Organization";

export default interface History {
  id: string;
  role: string;
  date: string;
  institution: string;
  category: Category;
}
