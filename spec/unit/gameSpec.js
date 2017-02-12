'use strict';

describe("Game", function() {
    
    var game;
    var game1;
    var shot;
    var frame
    
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
    
    describe("#finalFrame", function() {
        
        beforeEach(function() {
            lastFrameGame(game, shot);
            console.log(game.frames);
        });
        
        // it("it resets the frames", function() {
        //     console.log(game.frames);
        //     var frame = new Frame;
        //     var frames = [];
        //     frames.push(frame);
        //     game1.finalFrame();
        //     expect(game1.frames).toEqual(frames);
        // });
        
        // it("allows bonus rolls for a strike", function() {
        //     shot.bowl.and.returnValue(10);
        //     game.throwBall()
        // });
    });
});

function lastFrameGame(game, shot) {
    shot.bowl.and.returnValue(4);
    for(var i = 0; i < 18; i++) {
        game.throwBall();
    }
}