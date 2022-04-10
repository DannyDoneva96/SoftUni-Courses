
import { html } from '../lib.js';
import { deleteById, getPostId  } from '../api/data.js';
import { getUserData } from '../util.js'


const detailsTemplate = (post, isOwner, onDelete) => html `  <section id="details-page">
<h1 class="title">${post.title}</h1>

<div id="container">
    <div id="details">
        <div class="image-wrapper">
            <img src=${post.imageUrl} alt="Material Image" class="post-image">
        </div>
        <div class="info">
        <h2 class="title post-title">${post.title}</h2>
            <p class="post-description">Description: ${post.description}</p>
            <p class="post-address">Address: ${post.address}</p>
            <p class="post-number">Phone number: ${post.phone}</p>
            <p class="donate-Item">Donate Materials: 0</p>

            <!--Edit and Delete are only for creator-->
            ${isOwner 
      ? html `<div class="btns">
                <a href="/edit/${post._id}" class="edit-btn btn">Edit</a>
                <a  @click = ${onDelete} href="javascript:void(0)"  class="delete-btn btn">Delete</a>
            </div>`
      : html `<a href="javascript:void(0)"  class="donate-btn btn">Donate</a>`}
           

        </div>
    </div>
</div>
</section>`;




export async function detailsPage(ctx) {
    const userData = getUserData();

    const post =await getPostId(ctx.params.id)
      
  
    const isOwner = userData && userData.id == post._ownerId;


    async function onDelete(e) {
        crossOriginIsolated.log('dd')
        const choise = confirm(`Are you sure you want to delete this post`);

        if (choise) {
            await deleteById(post._id);
            ctx.page.redirect('/');
        }
    }

    ctx.render(detailsTemplate(post, isOwner, onDelete, ));

}