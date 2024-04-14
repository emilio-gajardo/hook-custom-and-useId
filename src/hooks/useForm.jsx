import { useState } from 'react';

export const useForm = (objInicial = {}) => {

    const [formulario, setFormulario] = useState(objInicial);

    const validateForm = (e) => {
        e.preventDefault();
        console.log('> validateForm')
        const form = e.target;
        let isValid = true;
        form.querySelectorAll('input, textarea').forEach((field) => {
            if (!field.value.trim()) {
                isValid = false;
            }
        });
        (isValid) ? serializarFormulario(form) : alert('Complete the form');
    }

    const serializarFormulario = (formulario) => {
        console.log('> serializarFormulario');
        const formData = new FormData(formulario);
        const objData = {};
        for (let [name, value] of formData) {
            objData[name] = value;
        }
        console.log(objData)
        setFormulario(objData);
        const preFormulario = document.querySelector('.pre-formulario');
        (preFormulario)
            ? preFormulario.classList.add('enviado')
            : console.log('div-pre-container not found');
    }

    return {
        formulario,
        serializarFormulario,
        validateForm,
    };
}