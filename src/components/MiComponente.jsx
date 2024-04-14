import React, { useId } from 'react';

export const MiComponente = () => {

    const id = useId();

    return (
        <>
            <h1>Mi Componente</h1>
            <h2>Hook useId</h2>
            <input id={id} type="text" name='Nombre' placeholder='Nombre' />
            <p>id componente: {id}</p>
        </>
    );
}