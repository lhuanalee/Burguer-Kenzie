import { Dispatch, ReactNode, SetStateAction } from "react";

export interface iCartProps {
  children: ReactNode;
}

export interface iCartProducts {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
  quantity?: any;
}

export interface iCartValue {
  currentCart: iCartProducts[];
  setCurrentCart: Dispatch<SetStateAction<iCartProducts[]>>;
  click: boolean;
  setClick: Dispatch<SetStateAction<boolean>>;
}
