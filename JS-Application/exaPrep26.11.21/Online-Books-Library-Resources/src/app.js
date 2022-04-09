import {page,render} from './lib.js';
import {homePage} from './views/home.js'
import {loginPage} from './views/login.js'
import {getUserData} from './util.js'
import { logout } from './api/api.js';
import {registerPage}  from './views/register.js'
import {createPage}  from './views/create.js'
import {detailsPage}from './views/details.js'
import {MyBookPage}from './views/myBooks.js'


//za testvane
import * as api from './api/data.js';
console.log('yes')

window.api = api;
const root= document.getElementById('site-content')
let logoutbtn = document.getElementById('logoutBtn').addEventListener('click',onlogOut)
page(decorate)
page('/',homePage)
page('/login',loginPage)
page('/register',registerPage)
page('/addBook',createPage)
page('/details/:id',detailsPage)
page('/my-books',MyBookPage)


updateUserNav()
page.start()

 export function updateUserNav() {
   let userData = getUserData();
     if(userData){
        let divUser =document.getElementById('user').style.display='inline-block'
        let divGuest =document.getElementById('guest').style.display="none"
        let user123 = document.getElementById('user123').textContent=`Welcome, ${userData.email}`

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
function onlogOut(e){
    logout()
    updateUserNav()
    page.redirect('/')
}