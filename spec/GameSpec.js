'use strict';

describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('start the game with current roll 0', function() {
    expect(game.currentRoll).toEqual(0);
  });

  it('start the game with frame score 0', function() {
    expect(game.frameScore).toEqual(0);
  });

  it('total frame score when rolled twice in each frame', function() {
    game.roll(3, 5);
    expect(game.frameScore).toBe(8);
  });

  it('player scores when knock down pins', function() {
    game.roll(7, 2);
    game.score();
    expect(game.totalScore).toEqual(9);
  });

  it('final score', function() {
    game.roll(7, 3);
    game.roll(2, 5);
    game.score();
    expect(game.finalScore).toEqual(12);
  });

  it('check after each set currnt roll changes by 2', function() {
    game.roll(2, 4);
    game.roll(3, 1);
    expect(game.currentRoll).toEqual(4);
  });

  it('start the game with empty list of scores', function() {
    expect(game.scoreArray).toEqual([]);
  });

  it('check the set of rolls are added to score array', function() {
    game.roll(2, 6);
    game.score();
    expect(game.scoreArray.length).toEqual(2);
  });

  it('player can roll a Gutter game', function() {
    for(var i = 0; i < 10 ; i++) {
      game.roll(0, 0);
      game.score();
    }
    expect(game.totalScore).toEqual(0);
  });

  it('player can score one for all rolls', function() {
    for (var i = 0; i < 10 ; i++) {
      game.roll(1, 1);
      game.score();
    }
    expect(game.totalScore).toEqual(20);
  });

});
