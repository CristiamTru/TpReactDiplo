import { useForm } from 'react-hook-form';

function Registro(){
  const { 
    register, 
    handleSubmit, 
    formState: {errors, isDirty},
    watch,
  } = useForm({ mode: "onChange"});
  
  const onSubmit = (data) =>{
    console.log(data);
  }

  const password = watch('password');
  

  return (
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div id="content-registro">
            <div className="item">
              <div className="labels">
                <label>Nombre</label>
                {errors.nombre && (
                  <span>El campo es obligatorio</span>
                )}
              </div>
              <input type="text" {...register("nombre",{required:true})}  />
            </div>
            
            <div className="item">
              <div className="labels">
                <label>Apellido</label>
                {errors.apellido && (
                  <span>El campo es obligatorio</span>                
                )}
              </div>
              <input type="text" {...register("apellido",{required:true})}  />
            </div>
            
            <div className="item">
              <div className="labels">
                <label>Email</label>
                {errors.email && (
                  <span>El campo es obligatorio</span>
                )}
              </div>
              <input type="email" {...register("email",{required:true})}  />
            </div>
           
            <div className="item">
              <div className="labels">
                <label>Contraseña</label>
                {errors.password && (
                  <span>El campo es obligatorio</span>
                )}
              </div>
              <input type="password" {...register("password",{required:true})}  />
            </div>
            
            <div className="item">
              <div className="labels">
                <label>Confirmar contraseña</label>
                {errors.confirmPassword && (
                  <span>La contraseña es diferente a la anterior</span>
                )}
              </div>
              <input type="password" {...register("confirmPassword",{
                required: true,
                validate: value => value === password,
              })} />
            </div>
           
            <div className="item enviar">              
              <button type="submit" disabled={!isDirty}>REGISTRARSE</button>
            </div>
          </div>
        </form>
      </div>
  );    
}

export default Registro;
