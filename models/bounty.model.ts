export interface IBounty {
    _id: string;
    title: string;
    description: string;
    creator: string;
    contract: string;
  }
  
  export interface IBounty {
    _id: string;
    title: string;
    description: string;
    creator: string;
    contract: string;
    placeholderPic: string;
    reward: number;
    currency: string;
    dueDate: Date;
  }
  