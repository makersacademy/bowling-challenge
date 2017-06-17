'use strict';

describe('Frame', function () {
  var frame, nextFrame, extraFrame;
  var ball, firstBall, secondBall;

  beforeEach(function () {
    frame = new Frame();
    nextFrame = new Frame();
    extraFrame = new Frame();
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
    expect(frame._getFramePartialScore()).toBeLessThan(11);
    expect(firstBall.getThrow).toHaveBeenCalled();
    expect(secondBall.getThrow).toHaveBeenCalled();
  });

  it('can set a strike in current frame', function () {
    spyOn(ball, "getThrow").and.returnValue(10);
    frame.addBall(ball);
    expect(frame.isStrike()).toEqual(true);
  });

  it('can set a spare in current frame', function () {
    frame.addBall(firstBall);
    frame.addBall(secondBall);
    expect(frame.isSpare()).toEqual(true);
  });

  it('can calculate the spare bonus on next throw for the current frame', function () {
    spyOn(ball, "getThrow").and.returnValue(7);
    frame.addBall(firstBall);
    frame.addBall(secondBall);
    nextFrame.addBall(ball);
    expect(frame.getFrameTotalScore(nextFrame)).toEqual(17);
  });

  it('can calculate the strike bonus on next frame for the current frame', function () {
    spyOn(ball, "getThrow").and.returnValue(10);
    frame.addBall(ball);
    nextFrame.addBall(firstBall);
    nextFrame.addBall(secondBall);
    expect(frame.getFrameTotalScore(nextFrame)).toEqual(20);
  });

  it('can calculate the strike bonus on next 2 frames for the current frame if next frame is a strike too', function () {
    spyOn(ball, "getThrow").and.returnValue(10);
    frame.addBall(ball);
    nextFrame.addBall(ball);
    extraFrame.addBall(firstBall);
    expect(frame.getFrameTotalScore(nextFrame, extraFrame)).toEqual(25);
  });

});
