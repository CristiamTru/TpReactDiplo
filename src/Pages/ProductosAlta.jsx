import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { create } from '../Services/productosService';





function ProductosAlta(){
  const { 
    register, 
    handleSubmit,  
   
  } = useForm({ mode: "onChange"});
  
  const onSubmit = async (data) => {
    try {
        const document = await create(data)
        console.log("🚀 ~ file: ProductosAlta.jsx:20 ~ onSubmit ~ document:", document)
        
    }
    catch(e){
      console.log(e)
    }
  }

 
  

  return (
      <div id="producto-alta">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" {...register("title")} />            
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPrecio">
            <Form.Label>Precio</Form.Label>
            <Form.Control type="text" {...register("price")} />            
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicImagen">
            <Form.Label>Imagen </Form.Label>
            <Form.Control type="text" {...register("thumbnail")} />            
          </Form.Group>
           
          
          <Button variant="primary" type="submit">
            GUARDAR 
          </Button>
        </Form>
        
      </div>
  );    
}

export default ProductosAlta;
