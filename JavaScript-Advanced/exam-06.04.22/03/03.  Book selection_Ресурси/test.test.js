const bookSelection = require('./book.js');
const { expect } = require('chai');

describe('bookSelection', () => {

    describe('isGenreSuitable ', () => {

        it('should ...........', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal("Books with Thriller genre are not suitable for kids at 12 age")
            expect(bookSelection.isGenreSuitable('Thriller', 11)).to.equal("Books with Thriller genre are not suitable for kids at 11 age")
            expect(bookSelection.isGenreSuitable("Horror", 12)).to.equal("Books with Horror genre are not suitable for kids at 12 age")
            expect(bookSelection.isGenreSuitable("Horror", 10)).to.equal("Books with Horror genre are not suitable for kids at 10 age")
            expect(bookSelection.isGenreSuitable("Horror", 6)).to.equal("Books with Horror genre are not suitable for kids at 6 age")

        })
        it('should return ok', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 15)).to.equal("Those books are suitable")
            expect(bookSelection.isGenreSuitable('Horror', 15)).to.equal("Those books are suitable")
            expect(bookSelection.isGenreSuitable('other', 15)).to.equal("Those books are suitable")


        })
        it('should ...........', () => {
            expect(bookSelection.isGenreSuitable('ffgd', 5)).to.equal("Those books are suitable")
            expect(bookSelection.isGenreSuitable('Thrvfxgiller', 12)).to.equal("Those books are suitable")
        })


    })
    describe('isItAffordable ',()=>{
        it('should ...........', () => {
            expect(bookSelection.isItAffordable(5.5, 5)).to.equal("You don't have enough money")
            expect(bookSelection.isItAffordable(5, 2)).to.equal("You don't have enough money")
            expect(bookSelection.isItAffordable(5, 4)).to.equal("You don't have enough money")
            expect(bookSelection.isItAffordable(5, 2.8)).to.equal("You don't have enough money")
        })
        it('should ...........', () => {
            expect(bookSelection.isItAffordable(4,5)).to.equal('Book bought. You have 1$ left')
            expect(bookSelection.isItAffordable(5, 10)).to.equal('Book bought. You have 5$ left')
            expect(bookSelection.isItAffordable(5, 5)).to.equal('Book bought. You have 0$ left')
            expect(bookSelection.isItAffordable(5.5, 10)).to.equal('Book bought. You have 4.5$ left')
        })

        it('should ...........',()=>{
            expect(()=> bookSelection.isItAffordable(5,[5])).to.throw();
            expect(()=> bookSelection.isItAffordable(5,'5')).to.throw();
            expect(()=> bookSelection.isItAffordable('5',6)).to.throw();
            expect(()=> bookSelection.isItAffordable('d',5)).to.throw();
            expect(()=> bookSelection.isItAffordable(undefined,[5])).to.throw();
            expect(()=> bookSelection.isItAffordable(5,[])).to.throw();
            expect(()=> bookSelection.isItAffordable({},6)).to.throw();

        });

    })
    describe('•	suitableTitles  ',()=>{
        it('should ...........', () => {
            expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }],'Thriller')).to.contain('The Da Vinci Code')

          
        })
       
        it('should ...........', () => {
            expect(bookSelection.suitableTitles([{ title: "wtf", genre: "wtf" }],'wtf')).to.contain('wtf')

          
        })
        it('should ...........', () => {
            expect(bookSelection.suitableTitles([{ title: "wtf", genre: "g" },{ title: "g", genre: "wtf" },{ title: "wtf", genre: "wtf" }],'wtf')).to.contain('wtf','g')

          
        })
       
        it('should ...throw.......',()=>{
            expect(()=> bookSelection.suitableTitles(5,[5])).to.throw();
            expect(()=> bookSelection.suitableTitles('5',[5])).to.throw();
            expect(()=> bookSelection.suitableTitles({},"wtf")).to.throw();
            expect(()=> bookSelection.suitableTitles(undefined,"[5]")).to.throw();
            expect(()=> bookSelection.suitableTitles([5],5)).to.throw();
            expect(()=> bookSelection.suitableTitles(['df','dfsf'],['fsd','fsdf'])).to.throw();
            expect(()=> bookSelection.suitableTitles([5,6,6,5,5],{})).to.throw();


        });

    })


})