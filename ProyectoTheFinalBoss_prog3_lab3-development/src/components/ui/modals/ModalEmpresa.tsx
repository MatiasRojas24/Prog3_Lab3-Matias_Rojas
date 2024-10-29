import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { EmpresaService } from "../../../services/EmpresaService";
import { IEmpresa } from "../../../types/IEmpresa";
import { removeEmpresaActive } from "../../../redux/store/slices/EmpresaReducer"
import { Button, Form, Modal } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import styles from "./ModalEmpresa.module.css"
import TextFieldValue from "../textField/TextField";
import { useState } from "react";

interface IModalEmpresa {
    getEmpresas: Function; // Función para obtener las personas
    openModal: boolean;
    setOpenModal: (state: boolean) => void;
}

export const ModalEmpresa = ({
    getEmpresas,
    openModal,
    setOpenModal,
}: IModalEmpresa) => {
    // Valores iniciales para el formulario
    const initialValues: IEmpresa = {
        nombre: "",
        razonSocial: "",
        cuit: "",
        logo: null,
    };

    const API_URL = import.meta.env.VITE_API_URL;
    const apiEmpresa = new EmpresaService(API_URL + "/empresas");

    const empresaActive = useAppSelector(
        (state) => state.empresaReducer.empresaActive
    );
    const dispatch = useAppDispatch();

    const handleClose = () => {
        setOpenModal(false);
        dispatch(removeEmpresaActive());
    };

    // Estado del logo de la empresa
    const [selectedImage, setSelectedImage] = useState<File | null>(null);

    // Estado para el URL de la imagen
    const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedImage(file);
            setImagePreviewUrl(URL.createObjectURL(file)); // Crea la URL de la imagen
        }
    };

    return (
        <div>
            <Modal
                id={"empresaModal"}
                show={openModal}
                onHide={handleClose}
                size={"lg"}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header className={styles.modalHeader}>
                    {/* Título del modal dependiendo de si se está editando o añadiendo una persona */}
                    {empresaActive ? (
                        <Modal.Title>Editar una empresa</Modal.Title>
                    ) : (
                        <Modal.Title>Crear una empresa</Modal.Title>
                    )}
                </Modal.Header>
                <Modal.Body className={styles.modalBody}>
                    <Formik
                        validationSchema={Yup.object({
                            nombre: Yup.string().required("campo requerido"),
                            razonSocial: Yup.string().required("campo requerido"),
                            cuit: Yup.string()
                                .required('campo requerido')
                                .matches(/^[0-9]+$/, 'El campo debe contener solo números')
                                .min(11, 'El campo debe ser de 11 caracteres')
                                .max(11, 'El campo debe ser de 11 caracteres'),
                            logo: Yup.mixed()
                                .required('Se requiere una imagen')
                                .test('fileType', 'El archivo debe ser una imagen (jpg, jpeg, png)', (value) => {
                                    if (!value) return false; // Si no hay valor, falla la validación
                                    const file = value as File; // Asegúrate de que `value` sea un `File`
                                    return ['image/jpg', 'image/jpeg', 'image/png'].includes(file.type);
                                })
                        })
                        }
                        initialValues={empresaActive ? empresaActive : initialValues}
                        enableReinitialize={true}
                        onSubmit={async (values: IEmpresa) => {
                            // Enviar los datos al servidor al enviar el formulario
                            if (empresaActive) {
                                const cuitNumber = parseInt(empresaActive.cuit)
                                await apiEmpresa.put(cuitNumber, values);
                            } else {
                                await apiEmpresa.post(values);
                            }
                            // Obtener las personas actualizadas y cerrar el modal
                            getEmpresas();
                            handleClose();
                        }}
                    >
                        {() => (
                            <Form autoComplete="off" style={{ display: "flex", flexDirection: "column", gap: "5vh" }}>
                                <div className={styles.containerFormModal}>
                                    <TextFieldValue
                                        name="nombre"
                                        type="text"
                                        placeholder="Ingrese su nombre"
                                    />
                                    <TextFieldValue
                                        name="razonSocial"
                                        type="text"
                                        placeholder="Ingrese la razón social de la empresa"
                                    />
                                    <TextFieldValue
                                        name="cuit"
                                        type="text"
                                        placeholder="Ingrese el cuit de la empresa"
                                    />
                                    <div className={styles.containerAgregarimagen}>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageChange}
                                            id="file-upload"
                                            style={{ display: 'none' }} // Oculta el input
                                            name="logo"
                                        />
                                        {/* Botón personalizado */}
                                        <label htmlFor="file-upload" className={styles.customFileUpload}>
                                            Seleccionar imagen
                                        </label>
                                        {selectedImage ? (
                                            <img
                                                src={imagePreviewUrl!}
                                                alt="Vista previa"
                                                style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'cover' }}
                                            />
                                        ) : (
                                            <span className="material-symbols-outlined" style={{ scale: '3.8' }} >no_photography</span>
                                        )}
                                    </div>
                                </div>
                                <div className={styles.containerBotonesFormModal}>
                                    <Button className={styles.buttonModalCancelar} onClick={handleClose}>Cancelar</Button>
                                    <Button className={styles.buttonModalConfirmar} type="submit">Confirmar</Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </Modal.Body>
                <Modal.Footer style={{ backgroundColor: "#08192D", borderTop: "none" }}></Modal.Footer>
            </Modal>
        </div>
    )
}
