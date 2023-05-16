import {Link} from "react-router-dom"
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Producto({ id, nombre, precio, descripcion, thumbnail, pais }) {
  const formatoPrecio = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0
  }).format(precio);
  
  return (
         
      
        <Col>
          <Card>
            
            <Card.Img variant="top" src={thumbnail} />
            
            <Card.Body>
              <Card.Title>{nombre}</Card.Title>
              <Card.Text>
                <h2>{formatoPrecio}</h2>
              </Card.Text>
              <Button variant="primary" as={Link} to={`/producto/${id}`}>Ver Detalle</Button>
            </Card.Body>
          </Card>
        </Col>
      
    
   
  );
}

export default Producto;
