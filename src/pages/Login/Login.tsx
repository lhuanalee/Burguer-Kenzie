import Logo from "../../components/Logo/Logo";
import Ellipse from "../../assets/Ellipse.png";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Anchor from "../../components/Anchor/Anchor";

import { LoginStyle } from "./LoginStyle";

const Login = () => {
    return (
        <LoginStyle>
            <div className="banner">
                <Logo />
                <img src={Ellipse} className="ellipse" alt="Bolinhas" />
            </div>
            <div className="form">
                <form>
                    <h4>Login</h4>
                    <Input type="text" children="Nome"/>
                    <Input type="text" children="Senha"/>
                    <Button className="login">Logar</Button>
                    <span>Crie sua conta para saborear muitas delícias e matar sua fome!</span>
                    <Anchor to="/register" className="register">Cadastrar</Anchor>
                </form>
            </div>
        </LoginStyle>
    );
};

export default Login;