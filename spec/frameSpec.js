'use strict';

describe('Frame', function(){
  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  it('has a score for the first ball', function(){
    expect(frame.getFirstBallScore()).toEqual(0);
  });

  it('has a score for the second ball', function() {
    expect(frame.getSecondBallScore()).toEqual(0);
  });

  it('can return a total of the two frames', function() {
    expect(frame.getTotalFrameScore()).toEqual(getFirstBallScore + getSecondBallScore)
  });

});
