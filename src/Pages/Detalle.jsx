import {useState, useEffect} from "react"
import { useParams } from "react-router-dom";
import { getById } from "../Services/productosService";
import Cargando from "../Components/Cargando";
function Detalle(){
  const {id} = useParams()
  const [loading,setLoading] = useState(true)
  const [producto,setProducto] = useState({})
  
  console.log("🚀 ~ file: Detalle.jsx:8 ~ Detalle ~ producto:", producto)
  
  
  useEffect(
    ()=>{
      const request = async ()=>{
        try{
          const response = await getById(id)
          // const response = await res.json()
          console.log("🚀 ~ file: Productos.jsx:25 ~ request ~ response:", response)
          setProducto(response)
          setLoading(false)
        }catch(e){
          console.log(e)
        }
        
      }

      request()
      
      
    },
    [id]
  )

  const handleClick = ()=>{
    
  }
  if(loading){
    return (
      <Cargando />
    );
  }
  return (
    <div className="container">
      <div className="producto-detalle">
        <div className="img-producto">
          <img src={producto.pictures[0].url} />
        </div>
        <div className="detalle-info">
          <h1>{producto.title}</h1>
          <p>{producto.description}</p>
          <h2 className="precio-detalle">{producto.price.toLocaleString('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0 })}</h2>
         
          
          <button className="ver-mas" ><a onClick={handleClick}>Comprar</a></button>
        </div>
      </div>
      <div className="otros-productos">
        
      </div>
    </div>
  );
}

export default Detalle;
