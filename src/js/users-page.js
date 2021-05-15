import {getUsers} from './http-provider';

const body  = document.body;
let tbody;

const crearHtml = () => {
    
    const html = `
    <h1 class="mt-5"> Usuarios</h1>

    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">email</th>
                <th scope="col">Nombre</th>
                <th scope="col">Avatar</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.appendChild( div );
    
}

const crearFilaUsuario = ( { email, first_name, last_name, avatar} ) => {

    // En la tabla deben de colocar un correlativo empezando en 1
    // También deben de colocar el avatar

    const items = numItems();

    const html = `
        <td scope="col"> ${items} </td>
        <td scope="col"> ${email} </td>
        <td scope="col"> ${first_name} ${last_name} </td>
        <td scope="col">
            <img class="img-thumbnail" src="${avatar}">
        </td>
    `;

    const tr = document.createElement('tr');
    tr.innerHTML = html;

    // Añadir el table row (tr) dentro del TBody creado anteriormente
    
    tbody.append(tr);
}


export const initUsers = async() => {

    crearHtml();

    tbody = document.querySelector('tbody');

    // const usuarios = await getUsers();

    // usuarios.forEach(usuario => {
    //     crearFilaUsuario(usuario);
    // });

    (await getUsers()).forEach(crearFilaUsuario);

    // Obtener la lista de usuarios usando el servicio creado
    // Por cada usuario, llamar la función crearFila (for, forEach)
    // Colocar el init en el index.js, para que se ejecute la creación

}

const numItems = () => {
    const items = document.querySelectorAll('tr');
    return items.length;
}
