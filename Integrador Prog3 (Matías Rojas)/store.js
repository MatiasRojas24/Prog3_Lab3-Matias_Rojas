import { handleGetProductLocalStorage } from "../persistence/localStorage"

//STORE
//FUNCION QUE SE ENCARGA DE TRAER ELEMENTOS Y LLAMAR AL RENDER
export const handleGetProductToStore = ()=>{
    const products = handleGetProductLocalStorage();
    handleRenderList(products);
}
//SE ENCARGA DE FILTRAR Y RENDERIZAR LA SECCIÓN CON TODOS SUS RESPECTIVOS ELEMENTOS
export const handleRenderList = (productosIn)=>{
    //FILTRADO DE ARRAYS POR CATEGORIA
    const burgers = productosIn.filter((el)=> el.categories=="Hamburguesas")
    const papas = productosIn.filter((el)=> el.categories=="Papas")
    const gaseosas = productosIn.filter((el)=> el.categories=="Gaseosas")
    //RENDERIZA LOS ELEMENTOS DE LA SECCION
    const renderProductGroup = (productos, title)=>{
        if(productos.length>0){
            const productosHTML = productos.map((producto, index)=>{
                return `
                <div class="containerTargetItem" id="product-${producto.categories}-${index}">
                    <div>
                        <img class="imagenContainerTargetItem" src='${producto.imagen}'/>
                    <div>
                        <h2>${producto.nombre}</h2>
                    </div>
                    <div class="targetProps">
                        <p><b>Precio:</b> $${producto.precio}</p>
                    </div>
                    </div>
                </div>`
            })
            //RETORNA LA SECCION CON TODOS LOS ELEMENTOS DENTRO
            return `
            <section class="sectionStore">
                <div class="containerTitleSection">
                    <h3>${title}</h3>
                </div>
                <div class="containerProductStore">
                    ${productosHTML.join("")}
                </div>
            </section>`
        }else{
            return ""
        }
    }
    //renderizar cada uno de los productos dentro de su categoria
    const appContainer = document.getElementById("storeContainer")
    appContainer.innerHTML = `
    ${renderProductGroup(burgers,"Hamburguesas")}
    ${renderProductGroup(papas,"Papas")}
    ${renderProductGroup(gaseosas,"Gaseosas")}
    `
    //AÑADEN LOS EVENTOS DE MANERA DINÁMICA
    const addEvents = async (productsIn)=>{
        if (productosIn){
            const { setProductoActivo } = await import("../../main");
            const {openModal} = await import("../view/modal")
            productsIn.forEach((element, index) =>{
                const productContainer = document.getElementById(`product-${element.categories}-${index}`)
                productContainer.addEventListener('click', ()=>{
                    setProductoActivo(element)
                    openModal()
                })
            })
        }
    }
    addEvents(burgers);
    addEvents(papas);
    addEvents(gaseosas);
}
