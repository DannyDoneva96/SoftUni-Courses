let { expect } = require('chai');
let mathEnforcer = require('./04MathEnforcer')

describe('mathEnforcer tests', () => {
    //check AddFive
    describe('addFive functionality tests', () => {
        it('should return undefined if not number', () => {
            expect(mathEnforcer.addFive('1')).to.be.undefined
        })
        it('should return undefined if not number', () => {
            expect(mathEnforcer.addFive('cat')).to.be.undefined
        })
        it('returns udefined with array input', () => {
            expect(mathEnforcer.addFive([1])).to.be.undefined;
        });
        it('check positive number should return value', () => {
            expect(mathEnforcer.addFive(5)).to.equal(10)
        })

        it('check negative number should return value', () => {
            expect(mathEnforcer.addFive(-1)).to.equal(4)
        })

        it('check floating number should return value', () => {
            expect(mathEnforcer.addFive(1.1)).to.be.closeTo(6.1, 0.01)
        })
    });

    describe('subtractTen functionality tests', () => {

        it('should return undefined if not number', () => {
            expect(mathEnforcer.subtractTen('1')).to.be.undefined
        })
        it('should return undefined if not number', () => {
            expect(mathEnforcer.subtractTen('cat')).to.be.undefined
        })
        it('should return undefined if not number', () => {
            expect(mathEnforcer.subtractTen([5])).to.be.undefined
        })
        
        it('check positive number should return value', () => {
            expect(mathEnforcer.subtractTen(20)).to.equal(10)
        })

        it('check negative number should return value', () => {
            expect(mathEnforcer.subtractTen(-1)).to.equal(-11)
        })

        it('check floating number should return value', () => {
            expect(mathEnforcer.subtractTen(20.1)).to.be.closeTo(10.1, 0.01)
        })
       
    });
        
    describe('sum functionality tests', () => {

        it('should return undefined if not number', () => {
            expect(mathEnforcer.sum('1',5)).to.be.undefined
        })
        it('should return undefined if not number', () => {
            expect(mathEnforcer.sum(5,'cat')).to.be.undefined
        })
        
        it('check positive number should return value', () => {
            expect(mathEnforcer.sum(20,5)).to.equal(25)
        })

        it('check negative number should return value', () => {
            expect(mathEnforcer.sum(-5,-5)).to.equal(-10)
        })

        it('check floating number should return value', () => {
            expect(mathEnforcer.sum(20.1,10)).to.be.closeTo(30.1, 0.01)
        })
        it('should return undefined if not number', () => {
            expect(mathEnforcer.sum('1',[5])).to.be.undefined
        })
       
    });

});