import { Dispatch, ReactNode, SetStateAction } from "react";

import { iProductList } from "../ProductContext/types";

export interface iCartProps {
  children: ReactNode;
}

export interface iCartProducts {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
  quantity?: number;
}

export interface iCartValue {
  currentCart: iCartProducts[] | iProductList[];
  setCurrentCart: (
    value: React.SetStateAction<iCartProducts[] | iProductList[]>
  ) => void;
  click: boolean;
  setClick: Dispatch<SetStateAction<boolean>>;
}
