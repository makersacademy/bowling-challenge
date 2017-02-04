'use strict';

describe('Feature Test:', function() {
    
    var game;
    var frame;
    var shot;
    
    beforeEach(function() {
        game = new Game();
        frame = new Frame();
        shot = new Shot();
        
        spyOn(Math, 'random').and.returnValue(0.5);
    });
    
    it("can make a shot", function() {
        expect(shot.bowl()).toEqual(5);
    });
    
    it("can knock down pins in the current frame", function() {
        game.throwBall();
        expect(game.currentFrame().pinsStanding()).toEqual(5);
    });
});