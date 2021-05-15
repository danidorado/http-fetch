import './css/global.css';
import {initChistes} from './js/chistes-page';
import {initUsers} from './js/users-page';

import * as CRUD from './js/crud-user-provider';

// fetch(jokeUrl)
//     .then( resp => resp.json())
//     .then (({id, value}) => console.log({id, value}));

// getChiste().then(console.log);

initChistes();
initUsers();

CRUD.getUser(1).then(console.log);

CRUD.createUser({
    name: 'Daniel',
    job: 'Developer'
}).then(console.log);

CRUD.updateUser(1,{
    name: 'Daniel',
    job: 'Developer'
}).then(console.log);

CRUD.deleteUser(1).then(console.log);




