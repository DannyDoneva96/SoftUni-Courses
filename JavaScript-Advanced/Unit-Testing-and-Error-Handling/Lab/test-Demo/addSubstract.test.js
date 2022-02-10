let { expect } = require('chai');
let { createCalculator } = require('./07addSubstract');

describe('Summator', () => {
    let instance = {}
    beforeEach(() => {
        instance = createCalculator();
    });
    it('has all methods', () => {
        expect(instance).to.has.ownProperty('add')
        expect(instance).to.has.ownProperty('subtract')
        expect(instance).to.has.ownProperty('get')

    });
    it('adds num', () => {
        instance.add(5)
        expect(instance.get()).to.equal(5)
    })
    it('adds nums', () => {
        instance.add(5)
        instance.add(5)

        expect(instance.get()).to.equal(10)
    })
    it('subtract num', () => {
        instance.subtract(1)
        expect(instance.get()).to.equal(-1)
    });
    it('subtract nums', () => {
        instance.subtract(1)
        instance.subtract(1)

        expect(instance.get()).to.equal(-2)
    });
    it('working with two methods', () => {
        instance.subtract(2)
        instance.add(1)
        expect(instance.get()).to.equal(-1)

    });
    it('working with nums as strings', () => {
        instance.subtract("2")
        instance.add("1")
        expect(instance.get()).to.equal(-1)
    })

    it('start empty', () => {
        expect(instance.get()).to.equal(0)
    })
});

