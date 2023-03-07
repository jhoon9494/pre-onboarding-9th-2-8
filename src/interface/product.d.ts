export interface IProductInfo {
  idx: number;
  name: string;
  mainImage: string;
  price: number;
  spaceCategory: string;
  description: string;
  maximumPurchases: number;
  registrationDate: string;
}

export interface IModal {
  isOpen: boolean;
  onClose: () => void;
  product: IProductInfo;
}
