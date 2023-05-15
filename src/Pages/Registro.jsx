import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';




function Registro(){
  const { 
    register, 
    handleSubmit,  
    formState: {errors},
  } = useForm({ mode: "onChange"});
  
  const onSubmit = (data) =>{
    console.log(data);
  }

 
  

  return (
      <div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" {...register("nombre",{required:true})} />
            {errors.nombre && (
                <Form.Text className="text-muted">
                  <span>El campo es obligatorio</span>
                </Form.Text>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicApellido">
            <Form.Label>Apellido</Form.Label>
            <Form.Control type="text"  {...register("apellido",{required:true})} />
            {errors.apellido && (
                <Form.Text className="text-muted">
                  <span>El campo es obligatorio</span>
                </Form.Text>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control type="email"  {...register("email",{
              required:true,
              pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
              })}  />
             {errors.email && (
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
            REGISTRARSE 
          </Button>
        </Form>
        
      </div>
  );    
}

export default Registro;
