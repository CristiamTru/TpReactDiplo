import {useState, useEffect} from "react"
import { useParams } from "react-router-dom";
import { getById } from "../Services/productosService";
import Cargando from "../Components/Cargando";
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
 
  if(loading){
    return (
      <Cargando />
    );
  }
  return (
    <div className="producto-detalle">    
      
        <Col>
          <Card>
            <div>
              <Card.Img variant="center"   src={producto.pictures[0].url} style={{ maxWidth: '100%' }} />
            </div>
            <Card.Body>
              <Card.Title>{producto.title}</Card.Title>
              <Card.Text>
                <p>{producto.description}</p>
                <h2 className="precio-detalle">{producto.price.toLocaleString('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0 })}</h2>
              </Card.Text>
              <Button className="ver-mas"  variant="primary">Ver Detalle</Button>
            </Card.Body>
          </Card>
        </Col>
      
    </div>  

  );
}

export default Detalle;
