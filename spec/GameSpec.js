"use strict";

describe('Game', function() {
  var game;
  var frame;
  var strike;
  var spare;
  beforeEach(function() {
    game = new Game();
    frame = [4,5];
    strike = [10,0];
    spare = [5,5];
  });

  xit('starts off with an empty scoresheet', function() {
    expect(game.scoresheet).toEqual([[]]);
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
    game.updateScore()
    expect(game.viewScore(1)).toEqual(20);
    expect(game.viewScore(2)).toEqual(14);
  });

  // it('calculates frame score', function() {
  //   spyOn(Math, 'floor').and.returnValue(4)
  //   game.addFrames(frame);
  //   game.currentPlayingFrame.bowl();
  //   game.currentPlayingFrame.bowl();
  //   game.calculateFrameScore()
  // })

  // it('updates game score', function() {
  //   spyOn(Math, 'floor').and.returnValue(4)
  //   game.addFrames(frame);
  //   game.frames[0].bowl();
  //   game.frames[0].bowl();
  //   game.updateScore();
  //   expect(game.score).toEqual(8);
  // });

  // it('returns true if frame is a strike', function() {
  //   spyOn(Math, 'floor').and.returnValue(10);
  //   game.addFrames(frame);
  //   game.frames[0].bowl();
  //   expect(game._strike()).toBe(true);
  // });
  //
  // it('adds bonus if frame is a strike', function() {
  //   spyOn(Math, 'floor').and.returnValue(5);
  //   game.addFrames([10, 0]);
  //   game.frames[0].bowl();
  //   game.addFrames(frame);
  //   expect(game.score).toEqual
  // })
});
