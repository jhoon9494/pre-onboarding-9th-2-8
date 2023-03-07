export interface IProductInfo {
  idx: number;
  name: string;
  mainImage: string;
  price: number;
  spaceCategory: string;
}

export interface IDetailInfo extends IProductInfo {
  description: string;
  maximumPurchases: number;
  registrationDate: string;
}
