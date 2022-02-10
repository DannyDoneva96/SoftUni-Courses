let { expect } = require('chai');
let rgbToHexColor = require('./RGBtoHEX');

describe('RGB Converter', () => {
    it('convert white', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });
    it('convert black', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    })

    describe('Invalid parameters', () => {
        it('returns undefined', () => {
            expect(rgbToHexColor(255)).to.be.undefined
        });

    })
    it('returns undefined', () => {
        expect(rgbToHexColor(256,256,256)).to.be.undefined
    });
    it('returns undefined', () => {
        expect(rgbToHexColor(-1,-1,-1)).to.be.undefined
    });
    it('returns undefined', () => {
        expect(rgbToHexColor('0','0','0')).to.be.undefined
    });
})
