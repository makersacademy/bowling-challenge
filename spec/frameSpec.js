'use strict';

describe('Frame', function(){
  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  it('has a score for the first ball', function(){
    expect(frame.getFirstScore()).toEqual(null);
  });

  it('has a score for the second ball', function() {
    expect(frame.getSecondScore()).toEqual(null);
  });

  it('can return a total of the two frames', function() {
    expect(frame.getTotalFrameScore()).toEqual(frame.getFirstScore() + frame.getSecondScore())
  });

  it('can adjust scores', function() {
    frame.addFirstScore(3);
    frame.addSecondScore(2);
    expect(frame.getTotalFrameScore()).toEqual(5);
  });

  it('has a maximum score of ten', function() {
    frame.addFirstScore(10);
    frame.addSecondScore(1);
    expect(frame.getTotalFrameScore()).toEqual(10);
  });

  it('can recognise a strike', function() {
    frame.addFirstScore(10);
    frame.addSecondScore(10);
    expect(frame.strike).toEqual(true);
  });

  it('does not give false positives for a strike', function() {
    frame.addFirstScore(5);
    frame.addSecondScore(1);
    expect(frame.strike).toEqual(null);
  })

  it('can recognise a spare', function() {
    frame.addFirstScore(5);
    frame.addSecondScore(5);
    expect(frame.spare).toEqual(true);
  });

  it('does not give false positives for a spare', function() {
    frame.addFirstScore(10);
    expect(frame.spare).toEqual(null);
  })

});
