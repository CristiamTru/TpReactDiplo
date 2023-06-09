
//Alias en el import. Ej BrowserRouter
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Registro from './Pages/Registro'
import Detalle from "./Pages/Detalle";
import NavBarMenu from "./Components/NavBarMenu";
import NotFound from "./Pages/NotFound";
import Footer from "../src/Components/Footer";

import ProductosAlta from './Pages/ProductosAlta';

import 'bootstrap/dist/css/bootstrap.min.css';
import BackgroundCircles from "./Components/BackgroundCircles";


function App() {
  return (
    <Router>
      <NavBarMenu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/alta" element={<ProductosAlta />} />
        <Route path="/producto/:id" element={<Detalle />} />
        <Route path="*" element={<NotFound />} />


      </Routes>
      <BackgroundCircles />

      <Footer />


    </Router>


  );
}

export default App;
