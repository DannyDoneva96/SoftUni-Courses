
// 80/100 point 

class ArtGallery {

    constructor(creator) {
        this.creator = creator
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 }
        this.listOfArticles = []
        this.guests = []

    }

    addArticle(articleModel, articleName, quantity) {
        if (!this.possibleArticles.hasOwnProperty(articleModel.toLowerCase())) { throw new Error("This article model is not included in this gallery!") }
        if (this.listOfArticles.some(s => s.articleName == articleName && s.articleModel == articleModel)) {
            let s = this.listOfArticles.find(s => s.articleName == articleName && s.articleModel == articleModel)
            s.quantity += quantity
        } else {
            this.listOfArticles.push({
                articleModel: articleModel.toLowerCase(),
                articleName: articleName,
                quantity: quantity
            })
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }

    inviteGuest(guestName, personality) {
        let points = 0
        if (this.guests.some(s => s.guestName == guestName)) {
            throw new Error(`${guestName} has already been invited.`)

        } else {
            if (personality == 'Vip') { points = 500 }
            if (personality == 'Middle') { points = 250 }
            if (personality !== 'Vip' && personality !== 'Middle') { points = 50 }

            this.guests.push({ guestName, points, purchaseArticle: 0 })
        }
        return `You have successfully invited ${guestName}!`
    }

    buyArticle(articleModel, articleName, guestName) {
        let article = this.listOfArticles.find(article => article.articleName == articleName && article.articleModel == articleModel)
        let guest = this.guests.find(s => s.guestName == guestName)
        if (article !== undefined) {
            if (article.quantity == 0) { return `The ${articleName} is not available.` }
        } else { throw new Error("This article is not found.") } 
        let name = article.articleModel

        let articlePoints = this.possibleArticles[name]

        if (!this.guests.some(s => s.guestName == guestName)) {
            throw new Error(`This guest is not invited.`)

        }
  

        if (guest.points < articlePoints) {
            return `You need more points to purchase the article."`
        } else {
            
            article.quantity -=1
            guest.purchaseArticle += 1
            guest.points -= articlePoints
            
            return `${guestName} successfully purchased the article worth ${ articlePoints} points.` }
    }
    showGalleryInfo(criteria) { 

         if (criteria == 'article'){ 
             let result = []
             result.push(`Articles information:`);
              this.listOfArticles.forEach(article => result.push(`${article.articleModel} - ${article.articleName} - ${article.quantity}`))
               return result.join('\n')
            }else if (criteria == 'guest'){ 
                let result = []
                result.push("Guests information:");
                this.guests.forEach(guest => result.push(`${guest.guestName} - ${guest.purchaseArticle}`))
                return result.join('\n')

         }
    }

}
// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
// console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
// console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));
//Successfully added article Mona Liza with a new quantity- 3.
//Successfully added article Ancient vase with a new quantity- 2.
//Successfully added article Mona Liza with a new quantity- 1.
// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.inviteGuest('John', 'Vip'));
// console.log(artGallery.inviteGuest('Peter', 'Middle'));
// console.log(artGallery.inviteGuest('John', 'Middle'));
// You have successfully invited John!
//  You have successfully invited Peter!
//John has already been invited.
const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));
// John successfully purchased the article worth 200 points.
//  Peter successfully purchased the article worth 250 points.
//  This article is not found.
