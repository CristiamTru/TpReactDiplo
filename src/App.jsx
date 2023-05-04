
//Alias en el import. Ej BrowserRouter
import {Route,Routes, BrowserRouter as Router} from "react-router-dom"
import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Registro from './Pages/Registro'
import Detalle from "./Pages/Detalle";
import NavBar from "./Components/NavBar";
import NotFound from "./Pages/NotFound";
import Footer from "../src/Components/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <NavBar />
       
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/producto/:id" element={<Detalle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>  
      <Footer /> 
       
    </Router>
    
     
  );
}

export default App;
