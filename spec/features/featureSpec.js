'use strict';

describe('Feature Test:', function() {
    
    var game;
    var frame;
    var shot;
    
    beforeEach(function() {
        game = new Game();
        frame = new Frame();
        shot = new Shot();
    });
    
    it("can make a shot", function() {
        expect(shot.bowl(10)).toBeLessThan(11);
    });
    
        
    it("can knock down pins in the current frame", function() {
        spyOn(Math, 'random').and.returnValue(0.6);
        game.throwBall();
        expect(game.currentFrame().pinsStanding()).toEqual(4);
    });
    
    it("can only knock down standing pins", function() {
        game.throwBall();
        game.throwBall();
        expect(game.currentFrame().pinsStanding()).toBeGreaterThan(-1);
    });
    
    it("after two throws, the frame resets", function() {
        spyOn(Math, 'random').and.returnValue(0.3);
        game.throwBall();
        game.throwBall();
        expect(game.currentFrame().pinsStanding()).toEqual(10);
    });
    
    it("resets frame after a strike", function() {
        spyOn(Math, 'random').and.returnValue(1);
        game.throwBall();
        expect(game.currentFrame().pinsStanding()).toEqual(10);
    });
});