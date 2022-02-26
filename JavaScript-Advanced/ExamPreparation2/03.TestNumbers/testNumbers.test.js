let testNumbers = require('./testNumbers')
let { expect } = require('chai');

describe('testNumbers tests', () => {
    //check sumNumbers
    describe('sumNumbers functionality tests', () => {
        it('parameters arent number should return undefined ', () => {
            expect(testNumbers.sumNumbers('string',5)).to.be.undefined
            expect(testNumbers.sumNumbers(null,5)).to.be.undefined

        });
        it('parameters arent number should return undefined ', () => {
            expect(testNumbers.sumNumbers(5,'5')).to.be.undefined
            expect(testNumbers.sumNumbers('5','5')).to.be.undefined
            expect(testNumbers.sumNumbers('1',5)).to.be.undefined
        });
        it('should return number', () => {
            expect(testNumbers.sumNumbers(3,0)).to.equal('3.00')
        });
        it('should return negative number', () => {
            expect(testNumbers.sumNumbers(-2,-2)).to.be.equal('-4.00')
        });
        it('should return positive num', () => {
            expect(testNumbers.sumNumbers(-2,4)).to.be.equal('2.00')

        })
        it('should return number to fixed of 2', () => {
            expect(testNumbers.sumNumbers(2.2568 ,56)).to.be.equal('58.26')
            
        })

    })
    describe('numberChecker functionality tests', () => {
        
        it('should return negative number', () => {
            expect(testNumbers.numberChecker(2)).to.be.equal("The number is even!")
            expect(testNumbers.numberChecker('2')).to.be.equal("The number is even!")

        });
      
        it('should return positive num', () => {
            expect(testNumbers.numberChecker(3)).to.be.equal("The number is odd!")
            expect(testNumbers.numberChecker('3')).to.be.equal("The number is odd!")

        });
        it('should return ', () => {
            expect(testNumbers.numberChecker(-5)).to.be.equal("The number is odd!")
            
        });
        it('deetect invalid param', () => {
            expect(()=> testNumbers.numberChecker('s')).to.throw()

        });
        it('deetect invalid param', () => {
            expect(()=> testNumbers.numberChecker(undefined)).to.throw()

        });

    })
    describe('averageSumArray functionality tests', () => {
        
        it('work with single param', () => {
            expect(testNumbers.averageSumArray([2])).to.be.equal(2)

        });
       
        it('work with negative', () => {
            expect(testNumbers.averageSumArray([2,2,2])).to.be.equal(2)
            expect(testNumbers.averageSumArray([-2,-5,5])).to.be.equal(-0.6666666666666666)

        });
        it('should return number to fixed of 2', () => {
            expect(testNumbers.averageSumArray(2,5,4)).to.be.NaN
            
        });
        it('deetect invalid param', () => {
            expect(testNumbers.averageSumArray(';s')).to.be.NaN

        });

    })
 

});