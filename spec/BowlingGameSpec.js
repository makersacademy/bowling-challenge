'use strict';

describe('BowlingGame', function () {
  var frame, nextFrame;
  var bowlingGame;

  beforeEach(function () {
    bowlingGame = new BowlingGame();
    frame = new Frame();
    nextFrame = new Frame();
  });

  it('can add a frame to the game', function () {
    bowlingGame.addFrame(frame);
    expect(bowlingGame.getNumOfFrames()).toEqual(1);
  });

  it('can calculate total score for the game', function () {
    spyOn(frame, "getFrameTotalScore").and.returnValue(9);
    spyOn(nextFrame, "getFrameTotalScore").and.returnValue(8);
    bowlingGame.addFrame(frame);
    bowlingGame.addFrame(nextFrame);
    expect(bowlingGame.getTotalScore()).toEqual(17);
  });

  it('can throw an error if wrong frame number', function () {
    bowlingGame.addFrame(frame);
    bowlingGame.addFrame(nextFrame);
    expect(function () { bowlingGame.getFrameN(3) }).toThrowError(TypeError, "No such frame in this game!");
  });

});
