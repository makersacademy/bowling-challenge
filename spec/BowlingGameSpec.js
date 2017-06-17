'use strict';

describe('BowlingGame', function () {
  var frame, nextFrame;
  var bowlingGame;

  beforeEach(function () {
    bowlingGame = new BowlingGame();
    frame = new Frame();
    nextFrame = new Ball();
  });

  it('can add a frame to the game', function () {
    bowlingGame.addFrame(frame);
    expect(bowlingGame.getFramesNum()).toEqual(1);
  });


});
