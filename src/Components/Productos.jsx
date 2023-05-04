import { useEffect, useState } from "react";
import Producto from "./Producto";
import { getAllProductos } from "../Services/productosService";
import Cargando from "./Cargando";

function Productos(){

  const [loading,setLoading] = useState(true)
  const [productos,setProductos] = useState([])
  const [titulo,setTitulo] = useState('Listado de productos')

  useEffect(
    ()=>{
      const request = async ()=>{
        try{
          const response = await getAllProductos()
          // const response = await res.json()
          console.log("🚀 ~ file: Productos.jsx:25 ~ request ~ response:", response.results)
          setProductos(response.results)
          setLoading(false)
        }catch(e){
          console.log(e)
        }
        
      }

      request()
      
      
    },
    []
  )
  

  
  if(loading){
    return(
      <Cargando />
    )
  }else{
    return (
      <div className="container">
          <h1>{titulo}</h1>
         
          <div id="productos">
            {productos.map((producto) => 
              <Producto
                id={producto.id}
                imagen={producto.thumbnail}
                nombre={producto.title}
                precio={producto.price.toLocaleString('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0 })}

                categoria=""
              />
            )}
            
          </div>

      </div>
    );
  }
  
}

export default Productos;
