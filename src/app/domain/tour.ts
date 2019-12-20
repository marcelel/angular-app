interface Tour {

  id: string;
  name: string;
  country: string;
  price: number;
  description: string;
  mainPhotoLink: string;
  photoLinks: string[];
  rates: Rate[];
  terms: TourTerm[];
}
