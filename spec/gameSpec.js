'use strict';

describe("Bowling", () => {
    let Bowling = require('../lib/bowling');
    var bowling;
    
    beforeEach(() => bowling = new Bowling());

    describe("Each go", () => {
        it('should have a score added to the rolls array when a roll is made', () => {
            bowling.roll(5)
            expect(bowling.rolls[0]).toEqual(5)
        });
    }) 
});