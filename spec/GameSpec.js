'use strict';

describe('Game', function() {
    var game;
    var frame;


    beforeEach(function() {
        game = new Game();
        frame = new Frame();
    })

    it('starts game with a new frame', function(){
        game.start();
        expect(game.frames.length).toEqual(1);
    });

    it('throws error when starting new game if game has already started', function(){
        game.start();
        expect(function(){ game.start(); }).toThrow('Game already started.');
    });

    it('adds frame to frames list', function(){
        game.addNewFrame();
        game.addNewFrame();
        expect(game.frames.length).toEqual(2);
    });

    it('tells frame length', function() {
        game.addNewFrame();
        game.addNewFrame();
        game.addNewFrame();
        expect(game.frameNumber()).toEqual(3);
    });

    it('ends game when 10 frames complete', function() {
        game.start();
        game.addNewFrame();
        game.addNewFrame();
        game.addNewFrame();
        game.addNewFrame();
        game.addNewFrame();
        game.addNewFrame();
        game.addNewFrame();
        game.addNewFrame();
        game.addNewFrame();
        expect(game.isRoundComplete()).toBeTruthy();
    });

    
});