'use strict';

describe("Frame", function() {
    
    var frame;
    var game;
    
    beforeEach(function() {
        frame = new Frame();
        game = jasmine.createSpyObj('game', ['throwBall']);
    });

    it("#pinsStanding returns the number of pins left standing", function() {
        game.throwBall.and.returnValue(5);
        frame.knockDownPins(game.throwBall());
        expect(frame.pinsStanding()).toEqual(5);
    });
    
    it("#knockDownPins knocks down the pins in the frame", function() {
        frame.knockDownPins(5);
        expect(frame.pinsStanding()).toEqual(5)
    });
})