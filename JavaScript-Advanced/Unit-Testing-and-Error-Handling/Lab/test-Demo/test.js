            
// const {expect}=require('chai')
// let { sum } = require('./sum')

// describe('Demo Test', () => {
//     it('should work with 5 and 3', () => {
//         expect(sum(5,3)).to.equal(8)
         
//             })
// })


// Problem N05 IS Symmetric Test

let {expect} = require('chai');
let {isSymmetric} = require('./checkForSymmetry.js');


describe('Symmetry check', () => {
it('return true for symmetric array',()=>{
    expect(isSymmetric([1,2,2,1])).to.be.true;
})
it('returns false for non symmetric array',()=>{
    expect(isSymmetric([1,2,3])).to.be.false;
});
it ('returns false for non array',()=>{
    expect(isSymmetric(5)).to.be.false;
})
it('return true for symmetric array',()=>{
    expect(isSymmetric(['a','b','b','a'])).to.be.true;
});
it('return true for symmetric array with odd number of elements',()=>{
    expect(isSymmetric([1,2,1])).to.be.true;
})


describe('Symmetry check', () => {
    it('return true for symmetric array',()=>{
        expect(isSymmetric([1,2,2,1])).to.be.true;
    })
    it('returns false for non symmetric array',()=>{
        expect(isSymmetric([1,2,3])).to.be.false;
    });
    it ('returns false for non array',()=>{
        expect(isSymmetric(5)).to.be.false;
    })
    it('return true for symmetric array',()=>{
        expect(isSymmetric(['a','b','b','a'])).to.be.true;
    });
    it('type different symmetric arrays',()=>{
        expect(isSymmetric([1,2,'1'])).to.be.false;
    })
    })
    
})









