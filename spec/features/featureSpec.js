'use strict';

describe('Feature Test:', function() {
    
    var game;
    
    beforeEach(function() {
        game = new Game();
    });
    
    it("can only knock down standing pins", function() {
        game.throwBall();
        game.throwBall();
        expect(game.currentFrame().pinsStanding()).toBeGreaterThan(-1);
    });
    
    describe("player knocks down 3 pins", function() {
        
        beforeEach(function() {
            spyOn(Math, 'random').and.returnValue(0.3);
            game.throwBall();
        });
    
        it("can knock down pins in the current frame", function() {
            expect(game.currentFrame().pinsStanding()).toEqual(7);
        });
        
        it("after second throw, the frame resets", function() {
            game.throwBall();
            expect(game.currentFrame().pinsStanding()).toEqual(10);
        });
        
        it("can return your score", function() {
           expect(game.showScore()).toEqual(10 - game.currentFrame().pinsStanding());
        });
    });
    
    describe("After a strike", function() {
        
        var number = 1;
        
        beforeEach(function() {
            spyOn(Math, 'random').and.callFake(function() {
                return number;
            });
            game.throwBall();
        });
        
        it("resets the frame", function() {
            expect(game.currentFrame().pinsStanding()).toEqual(10);
        });
        
        it("awards correct bonus points", function() {
            number = 0.3;
            game.throwBall();
            game.throwBall();
            expect(game.showScore()).toEqual(20);
        });
    });
    
    describe("After a spare", function() {
        
        var number = 0.5;
        
        beforeEach(function() {
            spyOn(Math, 'random').and.callFake(function() {
                return number;
            });
            game.throwBall();
            number = 1;
            game.throwBall();
        });
        
        it("award correct bonus points", function() {
            number = 0.3;
            game.throwBall();
            game.throwBall();
            expect(game.showScore()).toEqual(18)
        });
    });
});