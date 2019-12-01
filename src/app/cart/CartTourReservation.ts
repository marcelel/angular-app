interface CartTourReservation {

  id: number;
  tourId: number;
  tourTermId: number;
  amount: number;
  price: number;
  name: string;
  startDate: Date;
  endDate: Date;
}
