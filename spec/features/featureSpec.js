'use strict';

describe('Feature Test:', function() {
    
    var game;
    var frame;
    
    beforeEach(function() {
        game = new Game();
        frame = new Frame();
    });
    
    it("can only knock down standing pins", function() {
        twoThrows(game);
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
            twoThrows(game);
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
            twoThrows(game);
            expect(game.showScore()).toEqual(18)
        });
    });
    
    describe("After 9 frames", function() {
        var number = 0.5;
        
        beforeEach(function() {
            spyOn(Math, 'random').and.callFake(function() {
                return number;
            });
            for(var i = 0; i < 18; i++) {
                game.throwBall();
            }
        });
        
        it("the game ends after last throw", function() {
            var frames = [];
            frames.push(frame);
            game.throwBall();
            expect(game.throwBall()).toEqual("Gamover, your final score is: 70");
            expect(game.frames).toEqual(frames);
        });
        
        it("awards correct bonus points for a strike", function() {
            number = 1;
            twoThrows(game);
            expect(game.throwBall()).toEqual("Gamover, your final score is: 93");
        });
    });
});
