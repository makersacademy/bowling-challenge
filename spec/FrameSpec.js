'use strict';

describe('Frame', function() {
    var frame;
    beforeEach(function() {
    	frame = new Frame();
    });
    describe('roll', function() {
        it('returns a number between 0 and 10', function() {
        	frame.roll();
        	expect(frame.getScore()[0]).toBeLessThan(11);
        });
        it('does not roll more than 2 times', function() {
            for (var i = 0; i < 3; i++) {
                frame.roll();
            }
            expect(frame.getScore().length).toBeLessThan(3);
        });
    });
    describe('isSpare', function() {
        it('sets this.spare to true when first and second score = 10', function() {
            spyOn(Math, "random").and.returnValue(0.51);
            frame.roll();
            console.log(frame.getScore());
            frame.roll();
            console.log(frame.getScore());
            expect(frame.getScore()).toEqual([5, 5]);
            expect(frame.getSpare()).toBeTrue;
        });
        it('does not set spare to true when strike', function() {
            spyOn(Math, "random").and.returnValue(0.97);
            frame.roll();
            console.log(frame.getScore());
            frame.roll();
            expect(frame.getScore()).toEqual([10]);
            expect(frame.getSpare()).toBeFalse;
        });
    });
});