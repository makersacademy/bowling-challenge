'use strict';

describe("Game", function() {
    
    var game;
    var shot;
    
    beforeEach(function () {
        shot = jasmine.createSpyObj('shot', ['bowl']);
        game = new Game(shot);
    });
    
    describe ("#throwBall", function() {
        
        it("knocks down pins in the current frame", function() {
            shot.bowl.and.returnValue(5);
            game.throwBall();
            expect(game.currentFrame().pinsStanding()).toEqual(5);
        });
        
        it("gets a new frame afte two throws", function() {
            shot.bowl.and.returnValue(3);
            game.throwBall();
            game.throwBall();
            expect(game.currentFrame().pinsStanding()).toEqual(10);
        });
    });
})