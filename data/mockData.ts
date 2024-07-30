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
    title: "Stake 1",
    stakeAmount: 10000,
    isStaked: false,
  },
  {
    _id: "2",
    title: "Stake 2",
    stakeAmount: 20000,
    isStaked: false,
  },
  {
    _id: "3",
    title: "Stake 3",
    stakeAmount: 30000,
    isStaked: false,
  },
  {
    _id: "4",
    title: "Stake 4",
    stakeAmount: 40000,
    isStaked: false,
  },
  {
    _id: "5",
    title: "Stake 5",
    stakeAmount: 50000,
    isStaked: false,
  },
  {
    _id: "6",
    title: "Stake 6",
    stakeAmount: 60000,
    isStaked: false,
  },
  {
    _id: "7",
    title: "Stake 7",
    stakeAmount: 70000,
    isStaked: false,
  },
  {
    _id: "8",
    title: "Stake 8",
    stakeAmount: 80000,
    isStaked: false,
  },
  {
    _id: "9",
    title: "Stake 9",
    stakeAmount: 90000,
    isStaked: false,
  },
  {
    _id: "10",
    title: "Stake 10",
    stakeAmount: 100000,
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
