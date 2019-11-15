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

        it("should not be able to roll a negative number", () => {
            expect(() => bowling.roll(-2)).toThrow("roll must be between 0 and 10");
        });

        it("should not be able to roll a number bigger than 10", () => {
            expect(() => bowling.roll(11)).toThrow("roll must be between 0 and 10");
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
        });

        it("test consecutive spares each get a one roll bonus", () => {
            let rolls = [5, 5, 3, 7, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            rolls.map(roll => bowling.roll(roll));

            expect(bowling.getScore()).toEqual(31); 
        })

        it("test a spare in the last frame gets a one roll bonus that is counted once", () => {
            let rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 3, 7];
            rolls.map(roll => bowling.roll(roll));

            expect(bowling.getScore()).toEqual(17); 
        })

        it("test a strike earns ten points in a frame with a single roll", () => {
            let rolls = [10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            rolls.map(roll => bowling.roll(roll));

            expect(bowling.getScore()).toEqual(10); 
        })

        it("test points scored in the two rolls after a strike are counted twice as a bonus", () => {
            let rolls = [10, 5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            rolls.map(roll => bowling.roll(roll));

            expect(bowling.getScore()).toEqual(26); 
        })

        it("test consecutive strikes each get the two roll bonus", () => {
            let rolls = [10, 10, 10, 5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            rolls.map(roll => bowling.roll(roll));

            expect(bowling.getScore()).toEqual(81); 
        })
        
        it("test a strike in the last frame gets a two roll bonus that is counted once", () => {
            let rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 7, 1];
            rolls.map(roll => bowling.roll(roll));

            expect(bowling.getScore()).toEqual(18); 
        });

        it("test rolling a spare with the two roll bonus does not get a bonus roll", () => {
            let  rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 7, 3];
            rolls.map(roll => bowling.roll(roll));

            expect(bowling.getScore()).toEqual(20); 
        });

        it("test strikes with the two roll bonus do not get bonus rolls", () => {
            let  rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10];
            rolls.map(roll => bowling.roll(roll));

            expect(bowling.getScore()).toEqual(30); 
        });

        it("test a strike with the one roll bonus after a spare in the last frame does not get a bonus", () => {
            let  rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 3, 10];
            rolls.map(roll => bowling.roll(roll));

            expect(bowling.getScore()).toEqual(20); 
        });

        it("all strikes in a perfect game", () => {
            let rolls = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
            rolls.map(roll => bowling.roll(roll));

            expect(bowling.getScore()).toEqual(300); 
        })
    });
});