//Componente tipo funcion
import Productos from "../Components/Productos";
import Container from 'react-bootstrap/Container';
//import firebase from '../Config/firebase'
 



function Home() {
  //console.log(firebase)
  return (
    <Container>
      <Productos />
    </Container>
  );
}

export default Home;
