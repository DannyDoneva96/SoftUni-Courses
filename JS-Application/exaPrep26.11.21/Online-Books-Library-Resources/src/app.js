import {page,render} from './lib.js';
import { homePage } from './views/home.js';
// only for testing

import * as api from './api/data.js';

window.api = api;

//tova nagore ne mi e nujno samo za test e 


// page('/',()=>console.log('home page'));

// page.start()

// for checking if its connected ^^
// sega stupka nomer 7 
//ssega nomer 8
 const root = decument.getElementById('site-content')

 page(decorateContext());
 page('/',homePage);
 page.start()


function decorateContext(ctx,next) {
    ctx.render=(content) => render(content,root);

    next();
}



