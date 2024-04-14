import React from 'react';
import { useUpperLowerCase } from '../hooks/useUpperLowerCase';

export const PruebasCustom = () => {

    const texto = 'hola mundo';
    const { miTexto, mayusculas, minusculas, concatenar } = useUpperLowerCase(texto);


    return (
        <>
            <h2>Custom Hook</h2>
            <h3>Texto original: {texto}</h3>
            <h2>Texto modificado: {miTexto}</h2>
            <h4>Custom hooks:</h4>
            <ul>
                <button onClick={mayusculas}>useMayusculas</button>
                &nbsp;
                <button onClick={minusculas}>useMinusculas</button>
                &nbsp;
                <button onClick={ (e) => concatenar('added chile') }>useConcatenar</button>
            </ul>
        </>
    );
}