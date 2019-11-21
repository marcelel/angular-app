interface Tour {

  name: string;
  country: string;
  startDate: Date;
  endDate: Date;
  price: number;
  maxAmount: number;
  availableAmount: number;
  description: string;
  photoLink: string;
  rates: Rate[];
}
