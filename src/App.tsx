import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import Router from "./routes/Router";

import GlobalStyle from "./styles/globalStyle";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <ToastContainer theme="dark" />
      <Router />
    </div>
  );
};

export default App;
