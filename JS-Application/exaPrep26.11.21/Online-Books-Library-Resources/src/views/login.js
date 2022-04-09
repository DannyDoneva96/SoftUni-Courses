import { login } from '../api/api.js';
import { html } from '../lib.js'
import {updateUserNav} from '../app.js'

const loginTemplate = (onSubmit) => html`  <section id="login-page" class="login">
<form @submit = ${onSubmit} id="login-form" action="" method="">
    <fieldset>
        <legend>Login Form</legend>
        <p class="field">
            <label for="email">Email</label>
            <span class="input">
                <input type="text" name="email" id="email" placeholder="Email">
            </span>
        </p>
        <p class="field">
            <label for="password">Password</label>
            <span class="input">
                <input type="password" name="password" id="password" placeholder="Password">
            </span>
        </p>
        <input class="button submit" type="submit" value="Login">
    </fieldset>
</form>
</section>`

export  function loginPage(ctx) {
    ctx.render(loginTemplate(onSubmit));
     
    async function onSubmit(event) {
        event.preventDefault();
        let formData = new FormData(event.target)
        let email = formData.get('email')
        let password = formData.get('password')
        if (email==''||password==''){
            return alert('fill them all')
        }
        await login(email, password)
        ctx.updateUserNav()
        ctx.page.redirect('/')
          
    }
}
