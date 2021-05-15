import {getChiste} from './http-provider';

const body = document.body;
let btnChiste, olList;

const crearChisteHtml = () => {

    const html = ` 
    
        <h1 class="mt-5">Chuck Norris Jokes</h1>
        <hr>
        <button id="add-joke" class="btn btn-primary">Otro Chiste</button>
        <ol class="mt-2 list-group"> </ol>`;

    const divChistes = document.createElement('div');
    divChistes.innerHTML = html;

    body.append(divChistes);
}

const eventos = () => {

    olList    = document.querySelector('ol');
    btnChiste = document.querySelector('#add-joke');

    btnChiste.addEventListener('click', async() => {

        btnChiste.disable = true;
        const chiste = await getChiste();
        printChiste(chiste);
        btnChiste.disable = false;
        
    });
}

const printChiste = (chiste) => {

    const items = numItems() + 1;
    const olItem = document.createElement('li');
    olItem.innerHTML = `${items}. <b>${chiste.id}</b> <br/> ${chiste.value}`;
    olItem.classList.add('list-group-item');

    olList.append(olItem);

}

const numItems = () => {
    const items = document.querySelectorAll('li');
    return items.length;
}

export const initChistes = () => {
    crearChisteHtml ();
    eventos();
}