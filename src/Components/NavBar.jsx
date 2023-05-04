import {Link} from "react-router-dom"

function NavBar(){
  
  return (
    <ul id="menu-principal">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/registro">Registro</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
  );
}

export default NavBar;
