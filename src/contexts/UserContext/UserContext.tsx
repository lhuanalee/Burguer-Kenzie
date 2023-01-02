import { createContext } from "react";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { SubmitHandler } from "react-hook-form";

import { api } from "../../services/api";
import { iUserProps, iRegisterData, iUserValue, iLoginData } from "./types";

const UserProvider = ({ children }: iUserProps) => {
  const token = localStorage.getItem("@token");

  const navigate = useNavigate();

  const userRegistration: SubmitHandler<iRegisterData> = (data) => {
    api
      .post(`users`, data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        navigate("/");
        toast.success("Registro realizado com sucesso!", { autoClose: 2000 });
      })
      .catch((err) => console.log(err.response.data.message));
  };

  const userLogin: SubmitHandler<iLoginData> = (data) => {
    api
      .post("login", data)
      .then((response) => {
        navigate("/dashboard");
        localStorage.setItem("@token", response.data.accessToken);
        localStorage.setItem("@id", response.data.user.id);
        toast.success("Login realizado com sucesso!", { autoClose: 2000 });
      })
      .catch((err) => console.log(err.response.data.message));
  };

  const userLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{ token, userRegistration, userLogin, userLogout }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserContext = createContext({} as iUserValue);

export default UserProvider;
