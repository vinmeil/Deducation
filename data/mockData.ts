import { IUser } from "@/models/user.model";
import { ICrowdFund } from "@/models/crowdfund.model";
import { IStake } from "@/models/stake.model";

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

export const mockStakes: IStake[] = [
  {
    _id: "1",
    title: "Validator 1",
    stakeAmount: 827504,
    isStaked: false,
  },
  {
    _id: "2",
    title: "Validator 2",
    stakeAmount: 786403,
    isStaked: false,
  },
  {
    _id: "3",
    title: "Validator 3",
    stakeAmount: 664522,
    isStaked: false,
  },
  {
    _id: "4",
    title: "Validator 4",
    stakeAmount: 418524,
    isStaked: false,
  },
  {
    _id: "5",
    title: "Validator 5",
    stakeAmount: 402478,
    isStaked: false,
  },
  {
    _id: "6",
    title: "Validator 6",
    stakeAmount: 377892,
    isStaked: false,
  },
  {
    _id: "7",
    title: "Validator 7",
    stakeAmount: 355825,
    isStaked: false,
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
