import { setProductoActivo } from "../../main";
import { productoActivo } from "../../main";
import { handleDeleteProduct } from "../services/products";
/* ===POPUP===*/
const cancelButton = document.getElementById("cancelButton")
cancelButton.addEventListener('click',()=>{
    handleCancelButton();
})
const handleCancelButton = ()=>{
    closeModal();
}

//FUNCIONES ABRIR Y CERRAR MODAL
export const openModal = ()=>{
    const modal = document.getElementById("modalPopUP")
    modal.style.display = 'flex'
    if (productoActivo){
        deleteButton.style.display ="block"
        const nombre = document.getElementById("nombre"),
        imagen = document.getElementById("img"),
        precio = document.getElementById("precio"),
        categories = document.getElementById("categoria");
        nombre.value = productoActivo.nombre
        imagen.value = productoActivo.imagen
        precio.value = productoActivo.precio
        categories.value = productoActivo.categories
    }else{
        deleteButton.style.display ="none"
    }
}

export const closeModal = ()=>{
    const modal = document.getElementById("modalPopUP")
    modal.style.display = 'none'
    setProductoActivo(null)
    resetModal()
}
const resetModal = ()=>{
    const nombre = document.getElementById("nombre"),
    imagen = document.getElementById("img"),
    precio = document.getElementById("precio"),
    categories = document.getElementById("categoria");
    nombre.value = ""
    imagen.value = ""
    precio.value = 0
    categories.value = "Seleccione una categoria"
}

const deleteButton = document.getElementById("deleteButton")
deleteButton.addEventListener('click',()=>{
    handleButtonDelete()
})
const handleButtonDelete = ()=>{
    handleDeleteProduct()
}