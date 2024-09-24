import { Button, Form } from "react-bootstrap"
import { useForm } from "../../../hooks/useForm"
import { FC } from 'react'
interface IPropsFormProduct {
    handleAddProduct: Function;
}

export const FormProduct: FC<IPropsFormProduct>= ( {handleAddProduct} ) => {
    const {handleChange, values, resetForm} = useForm({
        nombre:'',
        imagen:'',
        precio:0
    })
    
    const handleSubmitForm = ()=>{
        handleAddProduct(values);
        resetForm();
    }
    return (
        <div>
            <Form className="p-4 border rounded m-3">
                <Form.Group controlId="formNombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" 
                    name="nombre" 
                    placeholder="Ingrese nombre producto" 
                    value={values.nombre} 
                    onChange={handleChange}></Form.Control>
                </Form.Group>
                <Form.Group controlId="formImagen">
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control type="text" 
                    name="imagen" 
                    placeholder="Ingrese imagen del producto" 
                    value={values.imagen} 
                    onChange={handleChange}></Form.Control>
                </Form.Group>
                <Form.Group controlId="formPrecio">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control type="number" 
                    name="precio" 
                    placeholder="Ingrese precio del producto" 
                    value={values.precio} 
                    onChange={handleChange}></Form.Control>
                </Form.Group>
                <div className="d-flex justify-content-center mt-4">
                    <Button onClick={handleSubmitForm} variant="primary">Enviar Producto</Button>
                </div>
            </Form>
        </div>
    )
}
