'use strict'

describe('Frame', () => {
    var frame;

    beforeEach(() => {
        frame = new Frame(1);
    });

    describe('A Frame ', () => {
        
        it('can report its score', () => {
            console.log(frame);
            frame.addRoll(5);
            frame.addRoll(3);
            expect(frame.score()).toEqual(8);      
        });
    
        it('knows if it is a strike', () => {
            frame.addRoll(10);
            expect(frame.isStrike()).toBe(true);
        });

        it('knows if it is a spare', () => {
            frame.addRoll(1);
            frame.addRoll(9);
            expect(frame.isSpare()).toBe(true);
        });

        it('knows if it is the last frame', () => {
            frame = new Frame(10);
            expect(frame.isLastFrame()).toBe(true);
        });

        it('knows when it is complete', () => {
            frame.addRoll(10);
            expect(frame.isComplete()).toBe(true);
        });
    });

});