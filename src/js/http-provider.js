
const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const urlUsers = "https://reqres.in/api/users?page=2";

const getChiste = async() => {


    try {
        const resp = await fetch(jokeUrl);

        if (!resp.ok)
            throw 'Servicio no disponible';

        const {icon_url, id, value} = await resp.json();
        return {icon_url, id, value};

    } catch (error) {        
        throw error;
    }   

}

const getUsers = async() => {

    try {
        const resp = await fetch(urlUsers);

        if (!resp.ok)
            throw 'Servicio no disponible';

        const {data} = await resp.json();
        //console.log({data});
        return data;

    } catch (error) {        
        throw error;
    }  

}

export{
    getChiste,
    getUsers,
}