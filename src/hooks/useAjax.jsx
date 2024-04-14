export const UseAjax = () => {

    const validateInput = (id, setUsuario, setUsuarioHtml, setCargando) => {

        id.trim();
        if (id % 1 !== 0 || typeof id === 'string' || id.length === 0) {
            setUsuarioHtml(<label>Input invalid</label>);
        }

        if (id % 1 === 0) {
            setTimeout(() => {
                const url = `https://reqres.in/api/users/${id}`;
                getUsuario(url, setUsuario, setUsuarioHtml, setCargando);
            }, 700);
        }
    }

    const getUsuario = async (url, setUsuario, setUsuarioHtml, setCargando) => {
        setCargando(true);
        setTimeout(async () => {
            const peticion = await fetch(url, { method: 'GET' })
            const { data } = await peticion.json();
            if (data != undefined) {
                setUsuario({ data });
                showDataUsusario(data, setUsuarioHtml);
            } else if (data == undefined) {
                setUsuario(null);
                showDataUsusario(null, setUsuarioHtml);
            }
            setCargando(false);
        }, 500);
    }

    const showDataUsusario = (usuario, setUsuarioHtml = null) => {
        let objHtml = '';
        if (usuario != null) {
            objHtml = (<div >
                <p>Id: {usuario.id}</p>
                <p>Email: {usuario.email}</p>
                <p>First_name: {usuario.first_name}</p>
                <p>Last_name: {usuario.last_name}</p>
                <p>Avatar: {usuario.avatar}</p>
            </div>);
        }
        if (usuario == null || usuario == undefined) {
            objHtml = (<label>User is not found</label>);
        }
        setUsuarioHtml(objHtml);
    }

    return {
        validateInput,
        getUsuario,
        showDataUsusario,
    }
}