import React, { useState } from 'react';

import { UseAjax } from '../hooks/useAjax';

export const MiUsuario = () => {

    const [url, setUrl] = useState(null);
    const [usuario, setUsuario] = useState(null);
    const [usuarioHtml, setUsuarioHtml] = useState(null);
    const [cargando, setCargando] = useState(false);
    const { validateInput, getUsuario, showDataUsusario } = UseAjax();

    const getId = (e) => {
        let id = e.target.value;
        validateInput(id, setUsuario, setUsuarioHtml, setCargando);
    }

    return (
        <>
            <h1>Mi Usuario</h1>
            <input type="text" name='id' onChange={getId} placeholder='Ingrese id only number' />
            &nbsp;
            <br />
            <p>{(cargando) && 'Loading data...'}</p>
            <div className='div-usuario-data'>{usuarioHtml}</div>
        </>
    );
}