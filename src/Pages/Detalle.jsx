import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getById } from "../Services/productosService";

import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Cargando from "../Components/Cargando";
import CloseButton from 'react-bootstrap/CloseButton';

import { Link } from "react-router-dom"


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


  //URL de la imagen en Firebase
  const estilo = {
    backgroundImage: `url(${producto.thumbnail})`,
    backgroundSize: `cover`,
    // Otras propiedades de estilo aquí
  };
  if (loading) {
    return <Cargando />;
  } else {
    return (
      <Container fluid style={estilo}>


        <Row xs={1} md={2} lg={2} className=" producto">
          <Link id="cerrar" to="/"><CloseButton /></Link>
          <Col className="p-0">
            <img src={producto.thumbnail} />
          </Col>
          <Col className="info-producto">
            <h1>{producto.title}</h1>
            <h1>{producto.pais}</h1>
            <p>{producto.descripcion}</p>
            <h2>{formatoPrecio}</h2>
            <Button variant="primary" >Ver Detalle</Button>
          </Col>
        </Row>
        <div className="overlay"></div>




      </Container>

    );
  }
}

export default Detalle;
