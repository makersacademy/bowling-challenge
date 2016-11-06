'use strict';

describe('Frame', function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it('adds a single bowl to the frame score', function() {
    frame.bowl(6);
    expect(frame.rolls).toContain(6);
  });

  it('updates the frame score for a single roll', function() {
    frame.bowl(6);
    expect(frame.score).toEqual(6);
  });

  it('updates the frame score for two rolls', function() {
    frame.bowl(6);
    frame.bowl(3);
    expect(frame.score).toEqual(9);
  });

  it('allows a maximum of 10 pins to be knocked down per frame', function() {
    frame.bowl(6);
    expect(function(){frame.bowl(5)}).toThrowError('Please re-enter correct score')
  });

  it('knows when a frame has ended', function() {
    frame.bowl(10);
    expect(frame.isEndFrame()).toBe(true);
  });

  it('recognises a strike condition',function() {
    frame.bowl(10);
    expect(frame.isStrike()).toBe(true);
  });

  it('recognises a spare condition',function() {
    frame.bowl(5);
    frame.bowl(5);
    expect(frame.isSpare()).toBe(true);
  });

  it('sets strike property to true', function() {
    frame.bowl(10);
    expect(frame.strike).toBe(true);
  });

  it('sets spare property to true', function() {
    frame.bowl(5);
    frame.bowl(5);
    expect(frame.spare).toBe(true);
  });

});
