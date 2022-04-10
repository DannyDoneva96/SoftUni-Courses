import { editPost, getPostId } from '../api/data.js';
import { html } from '../lib.js';


const editTemplate = (post, onSubmit) => html `<section id="edit-page" class="auth">
<form @submit=${onSubmit} id="edit">
    <h1 class="title">Edit Post</h1>

    <article class="input-group">
        <label for="title">Post Title</label>
        <input type="title" name="title" id="title" value=${post.title}>
    </article>

    <article class="input-group">
        <label for="description">Description of the needs </label>
        <input type="text" name="description" id="description" value=${post.description}>
    </article>

    <article class="input-group">
        <label for="imageUrl"> Needed materials image </label>
        <input type="text" name="imageUrl" id="imageUrl" value=${post.imageUrl}>
    </article>

    <article class="input-group">
        <label for="address">Address of the orphanage</label>
        <input type="text" name="address" id="address" value=${post.address}>
    </article>

    <article class="input-group">
        <label for="phone">Phone number of orphanage employee</label>
        <input type="text" name="phone" id="phone" value=${post.phone}>
    </article>

    <input type="submit" class="btn submit" value="Edit Post">
</form>
</section>`

export async function editPage(ctx) {
    const post = await getPostId(ctx.params.id)
    ctx.render(editTemplate(post, onSubmit))

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        const title = formData.get('title')
        const description = formData.get('description');
        const imageUrl = formData.get('imageUrl');
        const address = formData.get('address')
        const phone = formData.get('phone')


        if (title == '' || description == '' || imageUrl == '' || address == ''||phone =='') {
            return alert('Please fill all fields.');
        }
        await editPost(ctx.params.id, {
            title,
            description,
            imageUrl,
            address,
            phone
          }
          )
        ctx.page.redirect('/details/' + ctx.params.id)
    }
}