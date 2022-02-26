let cinema = require('./cinema')
let {expect,assert} = require('chai')


describe("Tests ", function() {


    describe("test functionality of showMovies", ()=> {
        it('check if resturns array', () => {
            expect(cinema.showMovies(['first', 'second'])).to.equal(['first', 'second'].join(', '));
        });
        it('check empty array', () => {
            expect(cinema.showMovies([])).to.equal("There are currently no movies to show.");
        });

     });
     describe("test functionality ofswapSeatsInHall", ()=> {
     it('check Unsuccessful change of seats in the hall' ,() => {
        expect(cinema.swapSeatsInHall(0,21)).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall(0,0)).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall(-5,2)).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall([],5)).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall(20,21)).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall('20',2)).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall(0,'s')).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall(undefined)).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall('0',4)).to.equal("Unsuccessful change of seats in the hall.");

     })
     it('check for Error by invalid type', () => {
        assert.throws(() => cinema.ticketPrice('Some Type'), 'Invalid projection type.');
        expect(() => cinema.ticketPrice('Some Type')).to.throw('Invalid projection type.');
    });


     })
});

 describe("test functionality of ticketPrice",() => {
it('should',() => {
    expect(cinema.ticketPrice('Premiere')).to.equal(12.00);
    expect(cinema.ticketPrice('Normal')).to.equal(7.50);
    expect(cinema.ticketPrice('Discount')).to.equal(5.50);

})
it('should',() => {
    expect(cinema.ticketPrice('pfepf')).to.throw(new Error('Invalid projection type.'))
     expect(cinema.ticketPrice('251')).to.throw(new Error('Invalid projection type.'))

 })
});
