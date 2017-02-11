'use strict';

describe("Game", function() {
    
    var game;
    var game1;
    var shot;
    
    beforeEach(function () {
        shot = jasmine.createSpyObj('shot', ['bowl']);
        game = new Game(shot);
        game1 = new Game;
    });
    
    it("#showScore returns the current score", function() {
        game1.throwBall;
        expect(game1.showScore()).toEqual(10 - game1.currentFrame().pinsStanding());
    });
    
    describe ("#throwBall", function() {
        
        it("knocks down pins in the current frame", function() {
            shot.bowl.and.returnValue(5);
            game.throwBall();
            expect(game.currentFrame().pinsStanding()).toEqual(5);
        });
        
        it("gets a new frame afte two throws", function() {
            shot.bowl.and.returnValue(3);
            twoThrows(game);
            expect(game.currentFrame().pinsStanding()).toEqual(10);
        });
        
        it("gets a new frame after a strike", function() {
           shot.bowl.and.returnValue(10);
           game.throwBall();
           expect(game.currentFrame().pinsStanding()).toEqual(10);
        });
    });
})