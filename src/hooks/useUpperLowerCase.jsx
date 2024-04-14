import { useState } from "react";

// Función custom hook
export const useUpperLowerCase = (texto) => {

    const [miTexto, setMiTexto] = useState(texto);

    const mayusculas = () => {
        setMiTexto(texto.toUpperCase());
    }

    const minusculas = () => {
        setMiTexto(texto.toLowerCase());
    }

    const concatenar = (added) => {
        let newTexto = (`${texto} - ${added}`);
        setMiTexto(newTexto);
    }

    return {
        miTexto,
        mayusculas,
        minusculas,
        concatenar,
    };
}