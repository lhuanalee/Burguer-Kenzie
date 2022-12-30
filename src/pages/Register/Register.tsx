import Logo from "../../components/Logo/Logo";

import Ellipse from "../../assets/Ellipse.png"
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { RegisterStyle } from "./RegisterStyle";

const Register = () => {
    return (
        <RegisterStyle>
            <div className="banner">
                <Logo />
                <img src={Ellipse} className="ellipse" alt="Bolinhas" />
            </div>
            <div className="form">
                <form>
                    <div className="registerHeader">
                        <h4 className="registerTitle">Cadastro</h4>
                        <p>Retornar para o login</p>
                    </div>
                    <Input type="text" children="Nome"/>
                    <Input type="email" children="Email"/>
                    <Input type="password" children="Senha"/>
                    <Input type="password" children="Confirmar senha"/>
                    <Button className="register">Cadastrar</Button>
                </form>
            </div>
        </RegisterStyle>
    );
};

export default Register;