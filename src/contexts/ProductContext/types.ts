import { ReactNode } from "react";

export interface iProductProps {
  children: ReactNode;
}

export interface iProductList {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
  quantity?: number;
}

export interface iProductsValue {
  productsList: iProductList[];
  setProductsList: React.Dispatch<React.SetStateAction<iProductList[]>>;
}
