import logo from './logo.svg';
import './App.css';
import Header from './layouts/Header';
import {Routes, Route} from 'react-router-dom';
import Welcome from './pages/welcome/Welcome';
import { useNavigate, Link, useLocation } from "react-router-dom";
import Layout from './layouts/Layout';
import Products from './pages/products/Products';
import Stores from './pages/stores/Stores';
import Events from './pages/events/Events';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

function App() {
  return (
      <Routes className="App">
      <Route element={<Layout/>}> 
      <Route exact path="/" element={<Welcome/>} />

        <Route path="/welcome" element={<Welcome/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/stores" element={<Stores/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />




      </Route>
    </Routes>
  );
}

export default App;
