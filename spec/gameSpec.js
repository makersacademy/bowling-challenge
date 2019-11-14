'use strict';

describe("Bowling", () => {
    let Bowling = require('../lib/bowling');
    var bowling;
    
    beforeEach(() => bowling = new Bowling());

    it('should have a random flight number generated', () => {
        bowling.roll(5)
        expect(bowling.rolls[0]).toEqual(5)
    });
});