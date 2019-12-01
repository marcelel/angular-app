interface Tour {

  id: number;
  name: string;
  country: string;
  price: number;
  description: string;
  mainPhotoLink: string;
  photoLinks: string[];
  rates: Rate[];
  tourTerms: TourTerm[];
}
