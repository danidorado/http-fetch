import { getUsers } from "./http-provider";

const urlCRUD = 'https://reqres.in/api/users';

const getUser = async(id) => {

    const resp = await fetch(`${urlCRUD}/${id}`);
    const {data} = await resp.json();

    return data;
}

const createUser = async(user) => {

    const resp = await fetch(urlCRUD, {
        method: 'POST',
        body: JSON.stringify(user),
        header:{
            'content-type' : 'application/json'
        }
    });

    return await resp.json();

}

const updateUser = async(id, user) => {

    const resp = await fetch(`${urlCRUD}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        header:{
            'content-type' : 'application/json'
        }
    });

    return await resp.json();

}

const deleteUser = async(id) => {

    const resp = await fetch(`${urlCRUD}/${id}`, {method: 'DELETE'});

    return (resp.ok) ? 'Borrado' : 'No se pudo borrar';

}

export{
    getUser,
    createUser,
    updateUser,
    deleteUser
}