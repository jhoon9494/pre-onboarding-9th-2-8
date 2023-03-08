export interface IProduct {
  idx: string;
  name: string;
  mainImage: string;
  description: string;
  spaceCategory: string;
  price: string;
  maximumPurchases: string;
  registrationDate: string;
}

export interface IProductReducer {
  isLoading: boolean;
  error: string | null;
  products: IProduct[];
}

export interface IFilter {
  minPrice?: string;
  maxPrice?: string;
  currPlace?: string;
}
