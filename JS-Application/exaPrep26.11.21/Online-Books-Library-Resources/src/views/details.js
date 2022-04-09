import { getBookById ,deleteById} from '../api/data.js';
import { html } from '../lib.js'
import { getUserData } from '../util.js'

const detailsTemplate = (book, isOwner, onDelete) => html` <section id="details-page" class="details">
<div class="book-information">
    <h3>${book.title}</h3>
    <p class="type">Type: ${book.type}</p>
    <p class="img"><img src=${book.imageUrl}></p>
    <div class="actions">
    ${bookControlsTemplate(book, isOwner , onDelete)}
    <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: 0</span>
            </div>
    </div>
</div>
<div class="book-description">
    <h3>Description:</h3>
    <p>${book.description}</p>
</div>
</section>  
`
const bookControlsTemplate = (book, isOwner, onDelete) => {
    if (isOwner) {
        return html `
        <a class="button" href="/edit/${book._id}">Edit</a>
        <a @click=${onDelete} class="button" href="javascript:void(0)">Delete</a>`;
    } else {
        return null;
    }
};
export async function detailsPage(ctx) {
    const userData = getUserData();
   const book = await getBookById(ctx.params.id)

    const isOwner = userData && userData.id == book._ownerId;
    async function onDelete() {
        const choise = confirm(`Are you sure you want to delete ${book.title}`);
    
        if (choise) {
            await deleteById(book._id);
            ctx.page.redirect('/');
        }
    }
    ctx.render(detailsTemplate(book,isOwner, onDelete,));
     
   
}
