import { FC, useState } from "react";
import styles from "./TarjetaEmpresa.module.css"
import { IEmpresa } from "../../../../types/dtos/empresa/IEmpresa";
import Buttons from "../../buttons/Buttons";
import { setEmpresaActive } from "../../../../redux/store/slices/EmpresaReducer";
import { ModalVerEmpresa } from "../../modals/modalsEmpresa/modalVerEmpresa/ModalVerEmpresa";
import { useAppDispatch } from "../../../../hooks/redux";

interface IEmpresas {
    empresas: IEmpresa[]
}

export const TarjetaEmpresa: FC<IEmpresas> = ({ empresas }) => {

    const [openModalVerEmpresa, setOpenModalVerEmpresa] = useState(false)
    const dispatch = useAppDispatch(); 
    const iconScale: string = "1"

    const handleVerSucursalesEmpresa = (empresa: IEmpresa) =>{
        dispatch(setEmpresaActive({ element: empresa }))
    }
    const handleVerEmpresa = (empresa: IEmpresa)=>{
            dispatch(setEmpresaActive({ element: empresa }));
            setOpenModalVerEmpresa(true)
    }
    const handleEditEmpresa = () => {

    }
    return (
        <div className={styles.containerEmpresas}>
            {empresas.map((empresa, index) => (
                <div key={index} style={{ width: "70%", padding: ".8rem", backgroundColor: "#006284", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap:"20px" }}>
                    <h3 onClick={() => handleVerSucursalesEmpresa(empresa)} style={{ cursor:"pointer", fontSize: "15px", textAlign: "center" }}>{empresa.nombre}</h3>
                    <div className={styles.containerBotonesEmpresa}>
                        <Buttons onClick={handleEditEmpresa} buttonColor="0077FF"><span className="material-symbols-outlined" style={{ scale: iconScale, display:"flex", alignItems:"center", justifyContent:"center"}}>edit</span></Buttons>
                        <Buttons onClick={() => handleVerEmpresa(empresa)} buttonColor="FC7600"><span className="material-symbols-outlined" style={{ scale: iconScale, display:"flex", alignItems:"center", justifyContent:"center"}}>visibility</span></Buttons>
                    </div>
                </div>
            ))}
            <ModalVerEmpresa 
                openModal={openModalVerEmpresa} setOpenModal={setOpenModalVerEmpresa}
            />
        </div>
    )
}

export default TarjetaEmpresa