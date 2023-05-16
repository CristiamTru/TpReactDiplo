import { useEffect, useState } from "react";
import Producto from "./Producto";
import { getAllProductos } from "../Services/productosService";
import Row from "react-bootstrap/Row";
import Cargando from "./Cargando";

function Productos() {
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState('Listado de productos');

  useEffect(() => {
    const request = async () => {
      try {
        const querySnapshot = await getAllProductos()
        console.log("🚀 ~ file: Productos.jsx:16 ~ request ~ querySnapshot:", querySnapshot.docs)
        setProductos(querySnapshot.docs)
        setLoading(false)
        
      } catch (error) {
        console.log(error);
      }
    };

    request();
  }, []);

  if (loading) {
    return <Cargando />;
  } else {
    return (
      
      <div>
        <h1>{titulo}</h1>
        <Row xs={1} md={2} lg={4}>
        
          {productos.map((producto) => (
            <Producto
              id={producto.id}
              thumbnail={producto.data().thumbnail}
              nombre={producto.data().title}
              precio={producto.data().price}
              descripcion={producto.data().descripcion}
              pais={producto.data().pais}
            />
          ))}
        </Row>
      </div>
      
    );
  }
}

export default Productos;
