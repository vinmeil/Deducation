import { IUser } from "@/models/user.model";
import { ICrowdFund } from "@/models/crowdfund.model";

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
];

export const tempCrowdFund: ICrowdFund[] = [
  {
    _id: "1",
    requester: "John Doe",
    description: "this is a test crowdfund request with a request amount of 50 sui",
    amountRequested: 50,
    currency: "Sui",
    dateRequested: new Date(),
  },
  {
    _id: "2",
    requester: "Jane Doe",
    description: "this is a test crowdfund request with a request amount of 50 sui but this one has a really really really long description",
    amountRequested: 50,
    currency: "Sui",
    dateRequested: new Date(),
  },
  {
    _id: "1",
    requester: "John Doe",
    description: "this is a test crowdfund request with a request amount of 50 sui",
    amountRequested: 50,
    currency: "Sui",
    dateRequested: new Date(),
  },
  {
    _id: "2",
    requester: "Jane Doe",
    description: "this is a test crowdfund request with a request amount of 50 sui but this one has a really really really long description",
    amountRequested: 50,
    currency: "Sui",
    dateRequested: new Date(),
  },
  {
    _id: "1",
    requester: "John Doe",
    description: "this is a test crowdfund request with a request amount of 50 sui",
    amountRequested: 50,
    currency: "Sui",
    dateRequested: new Date(),
  },
  {
    _id: "2",
    requester: "Jane Doe",
    description: "this is a test crowdfund request with a request amount of 50 sui but this one has a really really really long description",
    amountRequested: 50,
    currency: "Sui",
    dateRequested: new Date(),
  },
];
