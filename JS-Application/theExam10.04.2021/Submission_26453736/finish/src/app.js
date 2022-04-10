import {page,render} from './lib.js';
import {homePage} from './views/home.js'
import {loginPage} from './views/login.js'
import {getUserData} from './util.js'
import { logout } from './api/api.js';
import { registerPage } from './views/register.js';
import { createPostPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import {myPostsPage} from './views/myPosts.js'
import { editPage } from './views/edit.js';

import * as api from './api/data.js';
console.log('yes')

window.api = api;

const root= document.getElementById('main-content')
document.getElementById('logout').addEventListener('click',onLogout)

page(decorate)
page('/',homePage)
page('/login',loginPage)
page('/register', registerPage);
page('/create', createPostPage);
page('/details/:id', detailsPage);
page('/myPosts', myPostsPage);
page('/edit/:id', editPage);
updateUserNav()
page.start()

 export function updateUserNav() {
   let userData = getUserData();
     if(userData){
        let divUser =document.getElementById('user').style.display='inline-block'
        let divGuest =document.getElementById('guest').style.display="none"

     }else{
        let divUser =document.getElementById('user').style.display="none"
        let divGuest =document.getElementById('guest').style.display='inline-block'
     }
 }
function decorate(ctx,next) {
    ctx.render=(content)=>render(content,root);
    ctx.updateUserNav = updateUserNav;
    next();
}
function onLogout() {
   logout();
   updateUserNav();
   page.redirect('/');
}

