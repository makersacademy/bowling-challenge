'use strict';

describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it('starts with ten pins', function() {
    expect(frame.pins).toEqual(10);
  });

  it('#addBall can add a ball', function() {
    frame.addBall(5);
    frame.addBall(1);
    expect(frame.balls).toEqual([5,1]);
  });

  it('#completeFrame completes frame', function(){
    expect(frame.complete).toBe(false);
    frame._completeFrame();
    expect(frame.complete).toBe(true);
  });

  it('returns the score of the frame', function(){
    frame.addBall(5);
    frame.addBall(1);
    expect(frame.getFrameScore()).toEqual(6);
  });

  it('returns the score of the frame with bonuses', function(){
    frame.addBall(10);
    expect(frame.getFrameScore(1,2)).toEqual(13);
  });

  it('returns the correct score for the frame', function(){
    frame.addBall(5);
    frame.addBall(1);
    expect(frame.getFrameScore(1,2)).toEqual(6);
  });

})
