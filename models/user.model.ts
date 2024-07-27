import { IBattery } from "./battery.model";

export interface IUser {
  _id: string;
  name: string;
  email: string;
  batteries: IBattery[];
  validatorPercentage: number;
  personalPercentage: number;
  isLoaning: boolean;
}