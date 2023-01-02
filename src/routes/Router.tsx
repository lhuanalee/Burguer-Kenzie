import { Route, Routes } from "react-router-dom"

import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />}/>
        </Routes>
    );
};

export default Router;