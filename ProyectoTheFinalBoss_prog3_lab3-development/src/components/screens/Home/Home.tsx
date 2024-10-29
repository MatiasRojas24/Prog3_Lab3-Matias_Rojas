import { useEffect, useState } from 'react';
import styles from './Home.module.css';
import { EmpresaService } from '../../../services/EmpresaService';
import { useAppDispatch } from '../../../hooks/redux';
import { ModalEmpresa } from '../../ui/modals/ModalEmpresa';
import { setEmpresas } from '../../../redux/store/slices/EmpresaReducer';
import { TarjetaEmpresa } from '../../ui/tarjetas/TarjetaEmpresa';
import { IEmpresa } from '../../../types/IEmpresa';

export const Home = () => {
    // Estado de empresas
    const [empresas, setEmpresa] = useState<IEmpresa[]>([])
    // Estado del modal crear empresa
    const [openModal, setOpenModal] = useState(false);

    const API_URL = import.meta.env.VITE_API_URL;

    const empresaService = new EmpresaService(API_URL+"/empresas");
    const dispatch = useAppDispatch();

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    // Función para obtener las personas
    const getEmpresas = async () => {
        await empresaService.getAll().then((empresaData) => {
            dispatch(setEmpresas(empresaData));
            setEmpresa(empresaData)
        });
    };

    // Efecto para cargar los datos al inicio
    useEffect(() => {
        getEmpresas();
    }, []);

    return (
        <>
            <div className={styles.containerView}>
                <aside className={styles.asideContainer}>
                    <div>
                        <h1 style={{ fontSize: '1.8rem' }}>Empresas</h1>
                    </div>
                    <div>
                        <button onClick={handleOpenModal}>Agregar Empresa</button>
                    </div>
                    <TarjetaEmpresa empresas={empresas}  />
                </aside>

                <div className={styles.mainContainer}>
                    <div className={styles.containerButtonSucursal}>
                        <button onClick={handleOpenModal}>Agregar Sucursal</button>
                    </div>
                    <div className={styles.containerSucursales}></div>
                </div>
            </div>

            <ModalEmpresa
                getEmpresas={getEmpresas}
                setOpenModal={setOpenModal}
                openModal={openModal}
            />

        </>
    );
};
