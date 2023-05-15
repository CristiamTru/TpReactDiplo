import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { login } from '../Services/usuariosService'




function Login(){
  const { 
    register, 
    handleSubmit,  
    formState: {errors},
  } = useForm({ mode: "onChange"});
  
  const onSubmit = async (data) => {
    try {
      const user = await login(data.usuario, data.password);
      console.log("Usuario autenticado:", user);
    } catch (error) {
      console.log("Error al autenticar:", error);
    }
  };
  

  

  return (
      <div>
        <Form onSubmit={handleSubmit(onSubmit)}>
           
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control type="text"  {...register("usuario",{
              required:true,
              pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
              })}  />
             {errors.usua && (
                <Form.Text className="text-muted">
                  {errors.email?.type ==='required' && (
                  <span>El campo es obligatorio</span>                
                  )}
                  {errors.email?.type ==='pattern' && (
                  <span>El campo es obligatorio</span>                
                  )}
                </Form.Text>
              )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" {...register("password",{
              required:true,
              minLength: 6,
              maxLength: 12,
              })}  /> 
            {errors.password && (
                <Form.Text className="text-muted">
                  {errors.password?.type ==='required' && (
                  <span>El campo es obligatorio</span>                
                  )}
                  {errors.password?.type ==='minLength' && (
                  <span>Debe completar al menos 6 caracteres</span>                
                  )}
                  {errors.password?.type ==='maxLength' && (
                  <span>Debe completar menos  de 12 caracteres</span>                
                  )}
                </Form.Text>
              )}
          </Form.Group>
          <Button variant="primary" type="submit">
            INGRESAR 
          </Button>
        </Form>
        
      </div>
  );    
}

export default Login;
