'use strict';

describe("Bowling", () => {
    let Bowling = require('../lib/bowling');
    var bowling;
    
    beforeEach(() => bowling = new Bowling());

    describe("Bowling Setup", () => {
        it("should have empty rolls array", () => {
            expect(bowling.rolls).toEqual([]);
        });

        it("should start with score of 0", () => {
            expect(bowling.getScore()).toEqual(0);
        })
    });

    describe("Each go", () => {
        it('should have a score added to the rolls array when a roll is made', () => {
            bowling.roll(5)
            expect(bowling.rolls[0]).toEqual(5)
        });
    }) 
});