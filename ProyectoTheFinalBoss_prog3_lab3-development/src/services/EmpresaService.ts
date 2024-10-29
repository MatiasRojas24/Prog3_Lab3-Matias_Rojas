import { IEmpresa } from "../types/IEmpresa";
import { BackendClient } from "./BackendClient";

// Clase PersonaService que extiende BackendClient para interactuar con la API de empresa
export class EmpresaService extends BackendClient<IEmpresa> {}
