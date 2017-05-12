"use strict";

describe('Game', function() {
  var game;
  var frame;
  var strike;
  var spare;
  var nonStrikeFinal;
  beforeEach(function() {
    game = new Game();
    frame = [4,5];
    strike = [10,0];
    spare = [5,5];
    nonStrikeFinal = [4,0];
  });

  it('starts off with an empty scoresheet', function() {
    expect(game.scoresheet).toEqual([[],[],[],[],[],[],[],[],[],[]]);
  });

  it('has a turn counter', function() {
    expect(game.turn).toEqual(0);
  });

  it('adds one frame to the game', function() {
    game.addFrames(frame);
    expect(game.viewFrame(1)).toEqual(frame);
  });

  it('adds the score of the turn to the game', function() {
    game.addFrames(frame);
    game.updateScore();
    expect(game.viewScore(1)).toEqual(9);
  });

  it('increases the turn counter by one', function() {
    game.nextTurn();
    expect(game.turn).toEqual(1);
  });

  it('updates score accordingly when player bowls a strike', function() {
    game.addFrames(strike);
    game.updateScore();
    game.nextTurn();
    game.addFrames(frame);
    game.updateScore();
    expect(game.viewScore(1)).toEqual(19);
  });

  it('updates score accordingly when player bowls 2 consecutive strikes', function() {
    game.addFrames(strike);
    game.updateScore();
    game.nextTurn();
    game.addFrames(strike);
    game.updateScore();
    game.nextTurn();
    game.addFrames(frame);
    game.updateScore()
    expect(game.viewScore(1)).toEqual(29);
  });

  it('updates score accordingly when player bowls 3 consecutive strikes', function() {
    game.addFrames(strike);
    game.updateScore();
    game.nextTurn();
    game.addFrames(strike);
    game.updateScore();
    game.nextTurn();
    game.addFrames(strike);
    game.updateScore();
    game.nextTurn();
    game.addFrames(frame);
    game.updateScore()
    expect(game.viewScore(1)).toEqual(30);
    expect(game.viewScore(2)).toEqual(29);
  });

  it('updates score accordingly when player bowls a spare', function() {
    game.addFrames(strike);
    game.updateScore();
    game.nextTurn();
    game.addFrames(spare);
    game.updateScore();
    game.nextTurn();
    game.addFrames(frame);
    game.updateScore();
    expect(game.viewScore(1)).toEqual(20);
    expect(game.viewScore(2)).toEqual(14);
  });

  it('ends game and returns final score if 10th frame is not strike', function() {
    for(var i=0; i<9; i++) {
      game.addFrames(strike);
      game.updateScore();
      game.nextTurn();};
      game.addFrames(frame);
      game.updateScore();
      game.nextTurn();
      expect(game.totalScore).toEqual(262)
  });

  it('adds a bonus frame to the game if 10th frame is strike', function() {
    for(var i=0; i<10; i++) {
      game.addFrames(strike);
      game.updateScore();
      game.nextTurn();};
      game.addBonusFrame(frame);
      game.updateScore();
      game.nextTurn();
      expect(game.viewScore(9)).toEqual(24);
      expect(game.viewScore(10)).toEqual(19);
      expect(game.totalScore).toEqual(283)
  });

  it('adds a 12th frame to the game when 11th frame is strike', function() {
    for(var i=0; i<10; i++) {
      game.addFrames(strike);
      game.updateScore();
      game.nextTurn();};
      game.addBonusFrame(strike);
      game.updateScore();
      game.nextTurn();
      game.addBonusFrame(nonStrikeFinal);
      game.updateScore();
      game.nextTurn();
      expect(game.totalScore).toEqual(294)
  });

  it('calculates score for perfect game', function() {
    for(var i=0; i<10; i++) {
      game.addFrames(strike);
      game.updateScore();
      game.nextTurn();};
      game.addBonusFrame(strike);
      game.updateScore();
      game.nextTurn();
      game.addBonusFrame(strike);
      game.updateScore();
      game.nextTurn();
      expect(game.totalScore).toEqual(300)
  });
});
