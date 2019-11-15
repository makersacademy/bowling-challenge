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
    });
    
    describe("Calculating scores", () => {
        it("should calculate score of 0", () => {
            let rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            rolls.map(roll => bowling.roll(roll));

            expect(bowling.getScore()).toEqual(0);
        });
        
        it("should calculate score of where balls have no spares or strikes", () => {
            let rolls = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]
            rolls.map(roll => bowling.roll(roll));

            expect(bowling.getScore()).toEqual(90);
        });

        it("test a spare followed by zeros is worth ten points", () => {
            let rolls = [6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            rolls.map(roll => bowling.roll(roll));

            expect(bowling.getScore()).toEqual(10);
        });

        it("points scored in the roll after a spare are counted twice", () => {
            let rolls = [6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            rolls.map(roll => bowling.roll(roll));

            expect(bowling.getScore()).toEqual(16); 
        })
        
    })
});