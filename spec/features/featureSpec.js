'use strict';

describe('Feature Test:', function() {
    var game;
    var shot;
    
    beforeEach(function() {
        game = new Game();
        shot = new Shot();
    });
    
    it("can make a shot", function() {
        spyOn(Math, 'random').and.returnValue(0.5);
        expect(game.throwBall()).toEqual(5);
    });
});