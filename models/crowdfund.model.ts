export interface ICrowdFund {
  _id: string;
  requester: string;
  description: string;
  amountRequested: number;
  currency: string;
  dateRequested: Date;
}
