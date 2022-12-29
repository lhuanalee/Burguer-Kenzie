import Logo from "../../components/Logo/Logo";
import Ellipse from "../../assets/Ellipse.png";

import { LoginStyle } from "./LoginStyle";
import Input from "../../components/Input/Input";

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
                    <button className="login">Logar</button>
                    <span>Crie sua conta para saborear muitas delícias e matar sua fome!</span>
                    <button className="register">Cadastrar</button>
                </form>
            </div>
        </LoginStyle>
    );
};

export default Login;