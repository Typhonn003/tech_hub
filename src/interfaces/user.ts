import { TechData } from "./tech";
import { WorkData } from "./work";

export interface UserData {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  techs: TechData[];
  works: WorkData[];
  created_at: string;
  updated_at: string;
  avataR_url: string;
}
