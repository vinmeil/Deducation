import { IUser } from "@/models/user.model";

export const mockUsers: IUser[] = [
  {
    _id: "U1",
    name: "John Doe",
    email: "vincentliem3853@gmail.com",
    batteries: [
      {
        _id: "B1",
        name: "Main Battery",
        maxCapacity: 100,
        currentCapacity: 63.3821
      },
      {
        _id: "B2",
        name: "Backup Battery",
        maxCapacity: 100,
        currentCapacity: 100
      },
      {
        _id: "B3",
        name: "Extra Battery",
        maxCapacity: 100,
        currentCapacity: 20
      },
    ],
    validatorPercentage: 40,
    personalPercentage: 60,
    isLoaning: false,
  },
  {
    _id: "U2",
    name: "Jane Doe",
    email: "jane.doe@gmail.com",
    batteries: [
      {
        _id: "B4",
        name: "Newest Battery",
        maxCapacity: 100,
        currentCapacity: 20
      },
    ],
    validatorPercentage: 40,
    personalPercentage: 60,
    isLoaning: true,
  },
]