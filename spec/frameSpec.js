'use strict';

describe('Frame', function() {

    var frame;
    var game;

    beforeEach(function() {
        game = jasmine.createSpyObj('game', ['endFrame']);
        frame = new Frame();
    });

    it('allows two bowls per frame', function() {
        expect(frame._currentTurn >= 0 && frame._currentTurn < 2).toBeTruthy();
    });

    it('starts on turn 1', function() {
        expect(frame._currentTurn).toEqual(0);
    });

    it('starts with 10 pins standing', function() {
        expect(frame._pinsStanding).toEqual(10);
    });

    it('records the amount of pins currently standing', function() {
        expect(frame._pinsStanding >= 0 && frame._pinsStanding <= 10).toBeTruthy();
    });

    it('has a score between zero and ten', function() {
        expect(frame._score >= 0 && frame._score <= 10).toBeTruthy();
    });

    it('allows the bowler to knock pins down', function() {
        frame.turn(game, 10);
        expect(frame._pinsStanding).toEqual(0);
    });

    it('changes to turn 2 after taking a turn', function() {
        frame.turn(game, 8);
        expect(frame._currentTurn).toEqual(1);
    });

    it('records the score after taking a turn', function() {
        frame.turn(game, 8);
        expect(frame._score[frame._currentTurn - 1]).toEqual(8);
    });

    it('records a ten on the first turn as a strike', function() {
        frame.turn(game, 10);
        expect(frame._score[frame._currentTurn - 1]).toEqual('X');
    });

    it('records all pins knocked down over both turns as a spare', function() {
        frame.turn(game, 8);
        frame.turn(game, 2);
        expect(frame._score[frame._currentTurn - 1]).toEqual('/');
    });

    it('tells the game to end the frame after getting a strike', function() {
        frame.turn(game, 10);
        expect(game.endFrame).toHaveBeenCalledWith(frame._score);
    });

    it('tells the game to end the frame when both turns have been taken', function() {
        frame.turn(game, 8);
        frame.turn(game, 1);
        expect(game.endFrame).toHaveBeenCalledWith(frame._score);
    });


});
