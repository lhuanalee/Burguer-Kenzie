import { useContext } from "react";

import { LoginStyle } from "./LoginStyle";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { iLoginData } from "../../contexts/UserContext/types";
import { UserContext } from "../../contexts/UserContext/UserContext";

import { formSchemaLogin } from "../../configs/FormSchemaLogin/FormSchemaLogin";

import Input from "../../components/Input/Input";
import Anchor from "../../components/Anchor/Anchor";

import Logo from "../../components/Logo/Logo";
import Ellipse from "../../assets/Ellipse.png";

import Button from "../../components/Button/Button";

const Login = () => {
  const { userLogin } = useContext(UserContext);

  const { register, handleSubmit } = useForm<iLoginData>({
    resolver: yupResolver(formSchemaLogin),
  });

  return (
    <LoginStyle>
      <div className="banner">
        <Logo />
        <img src={Ellipse} className="ellipse" alt="Bolinhas" />
      </div>
      <div className="form">
        <form onSubmit={handleSubmit(userLogin)}>
          <h4>Login</h4>
          <Input type="email" label="E-mail" {...register("email")} />
          <Input type="password" label="Senha" {...register("password")} />
          <Button type="submit" className="login">
            Logar
          </Button>
          <span>
            Crie sua conta para saborear muitas delícias e matar sua fome!
          </span>
          <Anchor to="/register" className="register">
            Cadastrar
          </Anchor>
        </form>
      </div>
    </LoginStyle>
  );
};

export default Login;
