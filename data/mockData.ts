import { IUser } from "@/models/user.model";

export const mockUsers: IUser[] = [
  {
    _id: "U1",
    name: "John Doe",
    email: "vincentliem3853@gmail.com",
    battery: {
      maxCapacity: 100,
      currentCapacity: 63.3821
    },
    validatorPercentage: 40,
    personalPercentage: 60,
    isLoaning: false,
  },
  {
    _id: "U2",
    name: "Jane Doe",
    email: "jane.doe@gmail.com",
    battery: {
      maxCapacity: 100,
      currentCapacity: 20
    },
    validatorPercentage: 40,
    personalPercentage: 60,
    isLoaning: true,
  },
]