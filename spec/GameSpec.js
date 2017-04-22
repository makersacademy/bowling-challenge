"use strict";

describe('Game', function() {
  var game;
  var frame;
  var strike;
  beforeEach(function() {
    game = new Game();
    frame = [4,5];
    strike = [10,0];
  });

  it('starts off with an empty scoresheet', function() {
    expect(game.scoresheet).toEqual([[]]);
  });

  it('has a turn counter', function() {
    expect(game.turn).toEqual(0);
  });

  it('adds one frame to the game', function() {
    game.addFrames(frame);
    expect(game.scoresheet).toEqual([[frame]]);
  });

  it('adds the score of the turn to the game', function() {
    game.addFrames(frame);
    game.updateScore(frame);
    expect(game.scoresheet).toEqual([[frame,9]]);
  });

  it('increases the turn counter by one', function() {
    game.nextTurn();
    expect(game.turn).toEqual(1);
  });

  it('updates score accordingly when player bowls a strike', function() {
    game.addFrames(strike);
    game.updateScore(strike);
    game.nextTurn();
    game.addFrames(frame);
    game.updateScore(frame);
    expect(game.scoresheet).toEqual([[strike, 19],[frame,9]]);
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
