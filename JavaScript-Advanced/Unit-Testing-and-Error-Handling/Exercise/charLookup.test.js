let { expect } = require('chai');
let lookupChar = require('./charLookup')

describe('', () => {
    it('set wrong parameters should return undefined', () => {
        expect(lookupChar('string', 'string')).to.be.undefined
    })
    it('set wrong parameters should return undefined', () => {
        expect(lookupChar([], 'string')).to.be.undefined
    })
    it('set wrong parameters should return undefined', () => {
        expect(lookupChar({name:'danny'}, 'string')).to.be.undefined
    })
    it('set wrong parameters should return undefined', () => {
        expect(lookupChar(555, 5)).to.be.undefined
    })
    it('set wrong parameters should return undefined', () => {
        expect(lookupChar('string', '5')).to.be.undefined
    })
    it('set wrong index should return invalid index', () => {
        expect(lookupChar('string', 6)).to.equal("Incorrect index")
    })
    it('set wrong index should return invalid index', () => {
        expect(lookupChar('string', -1)).to.equal("Incorrect index")
    })
    it('set wrong index should return invalid index', () => {
        expect(lookupChar('string', 10)).to.equal("Incorrect index")
    })
    it('check functionality', () => {
        expect(lookupChar('string', 2)).to.equal("r")
    })
    it('check functionality', () => {
        expect(lookupChar('string cat dog', 7)).to.equal("c")
    })
    it('set wrong parameters should return undefined', () => {
        expect(lookupChar('string', 5.5)).to.be.undefined
    })
})