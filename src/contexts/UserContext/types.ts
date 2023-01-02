import { ReactNode } from "react";

export interface iUserProps {
  children: ReactNode;
}

export interface iRegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface iLoginData {
  email: string;
  password: string;
}

export interface iUserValue {
  token: string | null;
  userRegistration: (data: iRegisterData) => void;
  userLogin: (data: iLoginData) => void;
  userLogout: () => void;
}
