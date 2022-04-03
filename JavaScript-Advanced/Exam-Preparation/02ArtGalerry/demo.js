class ArtGallery {

    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 }
        this.listOfArticles = []
        this.guests = []
    }

    addArticle(articleModel, articleName, quantity) {


        articleModel = articleModel.toLowerCase().trim();
        if (articleModel !== "picture" && articleModel !== "photo" && articleModel !== "item") {
            throw new Error("This article model is not included in this gallery!")
        }

        for (let every of this.listOfArticles) {
            if (every.articleModel == articleModel && every.articleName == articleName) {
                every.quantity += quantity
                return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
            }

        }
        this.listOfArticles.push({ articleModel, articleName, quantity })
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`


    }
    inviteGuest(guestName, personality) {
        if (this.guests.some(g => g['guestName'] == guestName)) {
            throw new Error(`${guestName} has already been invited.`);
        }

        if (personality == 'Vip') {
            this.guests.push({
                'guestName': guestName,
                'points': 500,
                'purchaseArticle': 0
            })
        } else if (personality == 'Middle') {
            this.guests.push({
                'guestName': guestName,
                'points': 250,
                'purchaseArticle': 0
            })
        } else {
            this.guests.push({
                'guestName': guestName,
                'points': 50,
                'purchaseArticle': 0
            })
        }

        return `You have successfully invited ${guestName}!`

    }
    buyArticle(articleModel, articleName, guestName) {
        if (!this.listOfArticles.some(a => a['articleName'] == articleName && a['articleModel'] == articleModel)) {
            throw new Error("This article is not found.")
        }


        let article = this.listOfArticles.find(a => a['articleName'] == articleName)
        if (article.quantity <= 0) { return `The {articleName} is not available.` }

        if (!this.guests.some(s => s.guestName == guestName)) {
            return `This guest is not invited.`
        } else {
            let guest = this.guests.find(a => a['guestName'] == guestName)
            if (guest.points < this.possibleArticles[articleModel]) {
                return `You need to more points to purchase the article.`
            } else {

                guest.points -= this.possibleArticles[articleModel]
                let article =  this.listOfArticles.find(a => a['articleName'] == articleName)
                article.quantity -= 1
                guest.purchaseArticle += 1


                return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points."`
            }
        }
    }
    showGalleryInfo(criteria) {

        if (criteria == 'article') {
            console.log("Articles information:")
            let result = []
            this.listOfArticles.forEach(a => result.push(`${a.articleModel} - ${a.articleName} - ${a.quantity}`))
            return result.join('\n')
        } else if (criteria == 'guest') {
            console.log("Guests information:")
            let result = []
            this.guests.forEach(a => result.push(`${a.guestName} - ${a.purchaseArticle} `))
            return result.join('\n')

        }

    }
}
const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));

        //Output


// Articles information:
//  picture - Mona Liza - 3
//  item - Ancient vase - 1
//  Guests information:
//  John - 1
//  Peter - 1
