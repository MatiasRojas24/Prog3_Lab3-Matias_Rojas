import { handleGetProductLocalStorage, setInLocalStorage } from "../persistence/localStorage";
import { handleGetProductToStore, handleRenderList } from "../view/store";
import { closeModal } from "../view/modal";
import { productoActivo } from "../../main";
import Swal from "sweetalert2";

/* PRODUCTOS */
const acceptButton = document.getElementById("acceptButton")
acceptButton.addEventListener('click',()=>{
    handleSaveOrModifyElements();
})
//GUARDAR O MODIFICAR ELEMENTOS
export const handleSaveOrModifyElements = ()=>{
    const nombre = document.getElementById("nombre").value;
    const imagen = document.getElementById("img").value;
    const precio = document.getElementById("precio").value;
    const categories = document.getElementById("categoria").value;
    let object = null
    if(productoActivo){
        object = {
            ...productoActivo,
            nombre,
            imagen,
            precio,
            categories
        }
    }else{
        object ={
            id: new Date().toISOString(),
            nombre,
            imagen,
            precio,
            categories
        }
    }
    setInLocalStorage(object);
    handleGetProductToStore();
    Swal.fire({
        position: "center",
        icon: "success",
        title: "El elemento ha sido guardado!",
        showConfirmButton: false,
        timer: 2000
    });
    closeModal();
}

//eliminar producto

export const handleDeleteProduct = ()=>{
    Swal.fire({
        title: "¿Estás seguro?",
        text: "El cambio es irreversible!",
        icon: "warning",
        iconColor: "red",
        showCancelButton: true,
        confirmButtonColor: "rgba(48,187,94)",
        cancelButtonColor: "rgba(214,214,93)",
        confirmButtonText: "Si, eliminar!",
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
            const products = handleGetProductLocalStorage()
            const result = products.filter((el)=> el.id !== productoActivo.id)
            localStorage.setItem("products",JSON.stringify(result))
            const newProducts = handleGetProductLocalStorage()
            handleRenderList(newProducts)
            closeModal()
        }else{closeModal()}
    });
    
    
}