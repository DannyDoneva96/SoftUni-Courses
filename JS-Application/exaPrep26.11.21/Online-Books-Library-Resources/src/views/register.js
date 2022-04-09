import { register } from '../api/api.js';
import { html } from '../lib.js'
import { updateUserNav } from '../app.js'

const RegisterTemplate = (onSubmit) => html`
 <section id="register-page" class="register">
<form @submit=${onSubmit} id="register-form" action="" method="">
    <fieldset>
        <legend>Register Form</legend>
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
        <p class="field">
            <label for="repeat-pass">Repeat Password</label>
            <span class="input">
                <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password">
            </span>
        </p>
        <input class="button submit" type="submit" value="Register">
    </fieldset>
</form>
</section>`

export  function registerPage(ctx) {
    ctx.render(RegisterTemplate(onSubmit));
     
    async function onSubmit(event) {
        event.preventDefault();
        let formData = new FormData(event.target)
        let email = formData.get('email')
        let password = formData.get('password')
        let rePassword = formData.get('confirm-pass')

        if (email==''||password==''|| rePassword=='') {
            return alert('fill them all')
        }
        if (password!==rePassword) {
            return alert('pass dont match')
        }
        await register(email, password)
        ctx.updateUserNav()
        ctx.page.redirect('/')
          
    }
}
