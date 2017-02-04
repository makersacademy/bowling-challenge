'use strict';

describe("Game", function() {
    
    var game;
    var shot;
    
    beforeEach(function () {
        shot = jasmine.createSpyObj('shot', ['bowl']);
        shot.bowl.and.returnValue(5);
        game = new Game(shot);
    });
    
    it("#throwBall knocks down pins in the current frame", function() {
        game.throwBall();
        expect(game.currentFrame().pinsStanding()).toEqual(5);
    });
})