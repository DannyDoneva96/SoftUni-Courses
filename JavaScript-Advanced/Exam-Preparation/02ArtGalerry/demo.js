class ArtGallery {

    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture":200,"photo":50,"item":250 }
        this.listOfArticles = []
        this.guests = []
    }

   addArticle( articleModel, articleName, quantity ){

     
    articleModel = articleModel.toLowerCase().trim();
       if(articleModel!=="picture" && articleModel!=="photo" && articleModel!=="item"){
           throw new Error("This article model is not included in this gallery!")
       }

       for(let every of this.listOfArticles){
           if(every.articleModel==articleModel&&every.articleName==articleName){
               every.quantity+=quantity
               return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
           }
           
       }
       this.listOfArticles.push({articleModel, articleName, quantity})
       return`Successfully added article ${articleName} with a new quantity- ${quantity}.`


   }
   inviteGuest ( guestName, personality){

   }
   buyArticle ( articleModel, articleName, guestName){}

   showGalleryInfo (criteria){}
}
const artGallery = new ArtGallery('Curtis Mayfield');
console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));

// Output 1
//   Successfully added article Mona Liza with a new quantity- 3.
//   Successfully added article Ancient vase with a new quantity- 2.
//   Successfully added article Mona Liza with a new quantity- 1.
