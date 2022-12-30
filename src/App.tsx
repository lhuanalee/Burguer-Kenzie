import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

import GlobalStyle from './styles/globalStyle';

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      {/* <Login /> */}
      <Register />
    </div>
  );
};

export default App;
