
import {uploadImage} from './upload-provider';

const body  = document.body;
let inputFile, imgPic;

const crearHtml = () => {
    
    const html = `
    <h1 class="mt-5">Upload Image</h1>
    <hr>
    <label>Selecciona una foto: </label>
    <input id="file-input" type="file" accept="image/png, image/jpg, image/jpeg" />
    <br>
    <img id="uploaded-foto" src="" width="300" /> 
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.appendChild( div );

    imgPic    = document.querySelector('#uploaded-foto');
    inputFile = document.querySelector('#file-input');
}

const eventos = () => {
    inputFile.addEventListener('change', (event) => {
        const file = event.target.files[0];
        uploadImage(file).then( url => {
            imgPic.src = url;
        });
    });
}

export const initUpload = async() => {
    crearHtml();
    eventos();
}