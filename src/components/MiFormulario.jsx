import React from 'react';
import { useForm } from '../hooks/useForm';

export const MiFormulario = () => {
    const { formulario, validateForm } = useForm({});


    return (
        <>
            <h1>Mi Formulario</h1>
            <form onSubmit={(e) => validateForm(e)} className='mi-formulario'>
                <input type="text" name="titulo" placeholder="Título" />
                <br />
                <input type="number" name="anio" placeholder="Año" />
                <br />
                <input type="text" name='autor' placeholder='Autor' />
                <br />
                <input type="text" name='email' placeholder='email@email.com' />
                <br />
                <textarea name="descripcion" id="descripcion" placeholder='Descripción' ></textarea>
                <br />
                <input type="submit" value='enviar' />
            </form>
            <section className='section-form-data'>
                <div className='div-pre-container'>
                    <pre className='pre-formulario'>
                        {(Object.keys(formulario).length !== 0) &&
                            JSON.stringify(formulario)}
                    </pre>
                </div>
            </section>
        </>
    );
}