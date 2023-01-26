const { equal } = require('assert');
const Frame = require('./frame');

describe ('Frame', () => {
    it('Creates an array containing 3 bowl objects', () => {
        frame = new Frame
        expect(frame.bowls).toEqual([])
    });

})