import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getById } from "../Services/productosService";

import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


import Row from 'react-bootstrap/Row';



function Detalle() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [producto, setProducto] = useState({});
  console.log("🚀 ~ file: Detalle.jsx:4 ~ Detalle ~ params:", id);

  useEffect(() => {
    const request = async () => {
      try {
        const response = await getById(id);
        // const response = await res.json()
        console.log(
          "🚀 ~ file: Productos.jsx:25 ~ request ~ response:",
          response,
          response.data()
        );
        setProducto(response.data());
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };

    request();
  }, [id]);

  const formatoPrecio = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0
  }).format(producto.price);
  
  return (
    <div > 
      
        <Row xs={1} md={2} lg={2} className="g-4 producto">
          <Col >
            <img className="img-fluid" src={producto.thumbnail} />
          </Col>
          <Col>
            <h1>{producto.title}</h1>
            <h2>{formatoPrecio}</h2>
            <Button variant="primary" >Ver Detalle</Button>
          </Col>
        </Row>  
      
      
        
      
    </div>  
   
  );
}

export default Detalle;
