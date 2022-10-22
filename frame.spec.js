const Frame = require('./frame.js')

describe('Frame', () => {
    it ('#total', () => {
        const frame = new Frame(2,4);
        total = frame.getSum();
        expect(total).toBe(6);
    });
});