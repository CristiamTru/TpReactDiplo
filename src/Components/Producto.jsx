import {Link} from "react-router-dom"
function Producto({id,nombre,precio,categoria,imagen}){
  
  return (
    <div className="producto-item">
       <img src={imagen.replace('-I.', '-O.')} alt={nombre} style={{ maxWidth: '100%' }} />
      <div className="info-item">
        <h2>{precio}</h2>
        <h1>{nombre}</h1>        
        <p>{categoria}</p>
       
        <button className="ver-mas"><Link to={`/producto/${id}`}>Ver Detalle</Link></button>
      </div>
    </div>  
  );
}

export default Producto;
