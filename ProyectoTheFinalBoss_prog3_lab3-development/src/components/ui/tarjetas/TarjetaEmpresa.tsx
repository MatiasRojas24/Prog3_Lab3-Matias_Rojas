import { FC } from "react";
import styles from "./TarjetaEmpresa.module.css"
import { IEmpresa } from "../../../types/IEmpresa";
interface IEmpresas {
    empresas: IEmpresa[]
}
export const TarjetaEmpresa: FC<IEmpresas> = ({empresas}) => {

    return (
        <div className={styles.containerEmpresas}>
            {empresas.map((empresa, index) => (
                <div key={index} style={{ width: "80%", padding: ".8rem", backgroundColor: "#006284", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <h3 style={{ fontSize: "25px" }}>{empresa.nombre}</h3>
                </div>
            ))}
        </div>
    )
}

export default TarjetaEmpresa