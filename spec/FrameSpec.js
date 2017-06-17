'use strict';

describe('Frame', function () {
  var ball, firstBall, secondBall;
  var frame;

  beforeEach(function() {
      firstBall = new Ball();
      secondBall = new Ball();
      ball = new Ball();
      frame = new Frame();
  });

  it('can get number of balls in a frame', function() {
    expect(frame.getFrameSize()).toEqual(0);
  });

  it('can add ball to a frame', function (){
    frame.addBall(ball);
    expect(frame.getFrameSize()).toEqual(1);
  });

});
