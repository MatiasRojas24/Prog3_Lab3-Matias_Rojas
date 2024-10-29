import { AbstractBackendClient } from "./AbstractBackendClient";

export abstract class BackendClient<T> extends AbstractBackendClient<T> {
    constructor(baseUrl: string) {
        super(baseUrl);
    }

    async getAll(): Promise<T[]> {
        const response = await fetch(`${this.baseUrl}/`, {
            mode:'no-cors',
        });
        const data = await response.json();
        return data as T[];
    }

    async getById(id: number): Promise<T | null> {
        const response = await fetch(`${this.baseUrl}/${id}`, {
            mode:'no-cors'
        });
        if (!response.ok) {
            return null;
        }
        const data = await response.json();
        return data as T;
    }

    async post(data: T): Promise<T> {
        const response = await fetch(`${this.baseUrl}/`, {
            method: "POST",
            mode:'no-cors',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const newData = await response.json();
        return newData as T;
    }

    async put(id: number, data: T): Promise<T> {
        const response = await fetch(`${this.baseUrl}/${id}`, {
            method: "PUT",
            mode:'no-cors',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const newData = await response.json();
        return newData as T;
    }

    // Método para eliminar un elemento por su ID
    async delete(id: number): Promise<void> {
        const response = await fetch(`${this.baseUrl}/${id}`, {
            method: "DELETE",
            mode:'no-cors',
        });
        if (!response.ok) {
            throw new Error(`Error al eliminar el elemento con ID ${id}`);
        }
    }
}
