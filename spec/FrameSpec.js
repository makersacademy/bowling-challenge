'use strict';
//var Frame = require("../src/frame");

describe('Frame', function () {
  var frame, ball, firstBall, secondBall;

  beforeEach(function () {
    frame = new Frame();
    firstBall = new Ball();
    secondBall = new Ball();
    ball = new Ball();

    spyOn(firstBall, "getThrow").and.returnValue(5);
    spyOn(secondBall, "getThrow").and.returnValue(5);
  });

  it('can get number of balls in a frame', function () {
    expect(frame.getFrameSize()).toEqual(0);
  });

  it('can add ball to a frame', function () {
    frame.addBall(ball);
    expect(frame.getFrameSize()).toEqual(1);
  });

  it('can have maximum partial score per frame of 10', function () {
    frame.addBall(firstBall);
    frame.addBall(secondBall);
    expect(frame.getFramePartialScore()).toBeLessThan(11);
    expect(firstBall.getThrow).toHaveBeenCalled();
    expect(secondBall.getThrow).toHaveBeenCalled();
  });

  it('can set a strike in current frame', function () {
    spyOn(ball, "getThrow").and.returnValue(10);
    frame.addBall(ball);
    expect(frame.isStrike()).toEqual(true);
  });

});
