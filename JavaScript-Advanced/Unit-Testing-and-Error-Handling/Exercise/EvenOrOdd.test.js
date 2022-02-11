let { expect}= require('chai');
let isOddOrEven = require('./02EvenOrOdd')

describe('Function checks',()=>{
    it('should return undefined',()=>{   
         expect(isOddOrEven(584)).to.be.undefined
    })
    it('should return odd',()=>{   
        expect(isOddOrEven('dog')).to.equal('odd');
   })
   it('should return even',()=>{   
    expect(isOddOrEven('dogs')).to.equal('even');

})
it('should return undefined',()=>{   
    expect(isOddOrEven(true)).to.be.undefined
})
it('should return undefined',()=>{   
    expect(isOddOrEven([1,2])).to.be.undefined
})

})