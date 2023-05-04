import {Link} from "react-router-dom"
import Button from 'react-bootstrap/Button';
function Producto({id,nombre,precio,categoria,imagen}){
  
  return (
    <div className="producto-item">
       <img src={imagen.replace('-I.', '-O.')} alt={nombre} style={{ maxWidth: '100%' }} />
      <div className="info-item">
        <h2>{precio}</h2>
        <h1>{nombre}</h1>        
        <p>{categoria}</p>
       
        
        <Button variant="primary" as={Link} to={`/producto/${id}`}>Ver Detalle</Button>
      </div>
    </div>  
  );
}

export default Producto;
