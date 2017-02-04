'use strict';

describe("Game", function() {
    
    var game;
    var shot;
    
    beforeEach(function () {
        shot = jasmine.createSpyObj('shot', ['bowl']);
        game = new Game(shot);
    });
    
    it("#throwlBall returns an integer", function() {
        shot.bowl.and.returnValue(5);
        expect(game.throwBall()).toEqual(5);
    });
})