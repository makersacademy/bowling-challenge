'use strict';

 describe('Bowling', function() {
   var game;
   var currentRoll;

   beforeEach(function() {
     game = new Bowling();
   });

   it('starts with a new scorecard', function() {
     expect(game.getScoreboard()).not.toEqual(null);
   });

   it('player has not yet bowled', function () {
     expect(game.getCurrentRoll()).not.toEqual(null);
   });

   it('bowls first roll', function () {
    game.playFirstRoll();
    var board = game.getScoreboard();
    expect(board.frames.length).toEqual(1);
  });

  it('bowls second roll', function () {
    game.playFirstRoll();
    game.playSecondRoll();
    var board = game.getScoreboard();
    expect(board.getCurrentScore()).toBeGreaterThan(-1);
  });

 });
