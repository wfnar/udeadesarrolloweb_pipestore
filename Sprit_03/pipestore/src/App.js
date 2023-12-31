import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/home';
import Inicio from './routes/inicio';
import Login from './routes/login';
import Registro from './routes/registro';
import { useEffect } from 'react';



function App() {
  useEffect(() => {
    fetch("http://localhost:3006/users")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((e) => console.log(e));
  });

  return (
      
    <BrowserRouter>
      <Routes>
        <Route path="" Component={Inicio}></Route>
        <Route path="home" Component={Home}></Route>
        <Route path="login" Component={Login}></Route>
        <Route path="registro" Component={Registro}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
