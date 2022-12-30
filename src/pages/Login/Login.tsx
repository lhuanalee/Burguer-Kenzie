import Logo from "../../components/Logo/Logo";
import Ellipse from "../../assets/Ellipse.png";

import { LoginStyle } from "./LoginStyle";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const Login = () => {
    return (
        <LoginStyle>
            <div className="banner">
                <Logo />
                <img src={Ellipse} className="ellipse" alt="Bolinhas" />
            </div>
            <div className="form">
                <form>
                    <h4 className="loginTitle">Login</h4>
                    <Input type="text" children="Nome"/>
                    <Input type="text" children="Senha"/>
                    <Button className="login">Logar</Button>
                    <span>Crie sua conta para saborear muitas delícias e matar sua fome!</span>
                    <Button className="register">Cadastrar</Button>
                </form>
            </div>
        </LoginStyle>
    );
};

export default Login;