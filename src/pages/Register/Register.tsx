import { useContext } from "react";

import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { UserContext } from "../../contexts/UserContext/UserContext";
import { iRegisterData } from "../../contexts/UserContext/types";

import { formSchemaRegister } from "../../configs/FormSchemaRegister/FormSchemaRegister";

import Logo from "../../components/Logo/Logo";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

import Ellipse from "../../assets/Ellipse.png";

import { RegisterStyle } from "./RegisterStyle";

const Register = () => {
  const { userRegistration } = useContext(UserContext);

  const { register, handleSubmit } = useForm<iRegisterData>({
    resolver: yupResolver(formSchemaRegister),
  });

  return (
    <RegisterStyle>
      <div className="banner">
        <Logo />
        <img src={Ellipse} className="ellipse" alt="Bolinhas" />
      </div>
      <div className="form">
        <form onSubmit={handleSubmit(userRegistration)}>
          <div className="registerHeader">
            <h4>Cadastro</h4>
            <Link to="/">Retornar para o login</Link>
          </div>
          <Input type="text" label="Nome" {...register("name")} />
          <Input type="email" label="E-mail" {...register("email")} />
          <Input type="password" label="Senha" {...register("password")} />
          <Input
            type="password"
            label="Confirmar senha"
            {...register("confirmPassword")}
          />
          <Button type="submit" className="register">
            Cadastrar
          </Button>
        </form>
      </div>
    </RegisterStyle>
  );
};

export default Register;
