import { IPage } from "./page.model";

export interface ICourse {
  _id: string;
  title: string;
  description: string;
  coverImageUrl: string;
  creator: string;
  pages: IPage[];
  category: string;
}