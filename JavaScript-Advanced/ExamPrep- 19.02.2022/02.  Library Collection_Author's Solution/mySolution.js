class LibraryCollection {

    constructor(capacity) {
        this.capacity = Number(capacity)
        this.books = []
        this.booksNum = 0
    }

    addBook(bookName, bookAuthor) {
        if (this.capacity <= this.booksNum) { throw new Error("Not enough space in the collection.") }

        this.books.push({ bookName, bookAuthor, payed: false })
        this.booksNum++;
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }
    payBook(bookName) {
        if (!this.books.some(book => book.bookName == bookName)) { throw new Error(`${bookName} is not in the collection.`) }
        let book_ = this.books.find(book => book.bookName == bookName)

        if (book_.payed == true) {
            throw new Error(`${bookName} has already been paid.`)
        } else {
            book_.payed = true
            return `${bookName} has been successfully paid.`
        }
    }
    removeBook(bookName) {
        let book_ = this.books.find(book => book.bookName == bookName)
        if (!book_) { throw new Error(`The book, you're looking for, is not found.`) }
        if (book_.payed == false) { throw new Error(`${bookName} need to be paid before removing from the collection.`) }

        let index = this.books.indexOf(book_)
        this.books.splice(index, 1)
        this.booksNum--
        return `${bookName} remove from the collection.`
    }
    getStatistics(bookAuthor) {
        let result = []
        if (bookAuthor) {
            let status = 'Has Paid'

                     let book = this.books.find(b => b.bookAuthor == bookAuthor)
                     if (book.payed == false) { status = 'Not Paid' }
                    if(book){ return `${book.bookName} == ${book.bookAuthor} - ${status}.`}else{ 
                        throw new Error(`${bookAuthor} is not in the collection.`)
                    }

        } else {
            result.push(`The book collection has ${this.capacity - this.booksNum} empty spots left.`)
            this.books.sort(function (a, b) {
                return a.bookName.localeCompare(b.bookName);
            })
            let status = 'Has Paid'
            for (let everyBook of this.books) {
                if (everyBook.payed == false) { status = 'Not Paid' }
                result.push(`${everyBook.bookName} == ${everyBook.bookAuthor} - ${status}.`)
            }

        }
        return result.join('\n').trim()
    }


}
const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());
