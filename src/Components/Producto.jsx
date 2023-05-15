import {Link} from "react-router-dom"
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Producto({id,nombre,precio,categoria,imagen}){
  
  return (
    <div>      
      
        <Col>
          <Card>
            <div className="card-image-container">
              <Card.Img variant="center" className="card-image"  src={imagen.replace('-I.', '-O.')} alt={nombre} style={{ maxWidth: '100%' }} />
            </div>
            <Card.Body>
              <Card.Title>{nombre}</Card.Title>
              <Card.Text>
                <h2>{precio}</h2>
              </Card.Text>
              <Button variant="primary" as={Link} to={`/producto/${id}`}>Ver Detalle</Button>
            </Card.Body>
          </Card>
        </Col>
      
    </div>  

   
  );
}

export default Producto;
