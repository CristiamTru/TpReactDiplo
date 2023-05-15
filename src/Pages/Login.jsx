import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login(){
  return (
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Usuario</Form.Label>
            <Form.Control type="text"/>            
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" />
          </Form.Group>
          
          <Button variant="primary" type="submit">
            ENTRAR
          </Button>
        </Form>
        
      </div>
  );    
}

export default Login;
