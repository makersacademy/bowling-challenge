'use strict';

describe('Frame', function() {
  var frame;
  var next_frame;
  var next_next_frame;

  beforeEach(function() {
    frame = new Frame;
  });

  it('has 0 points to start', function() {
    expect(frame._points).toEqual([])
  });

  it('has 10 pins to start', function() {
    expect(frame._pins).toEqual(10)
  });

  it('has 2 throws', function() {
    expect(frame._throws).toEqual(2)
  });

  it('can knock down a pin with a throw', function() {
    frame.play(1);
    expect(frame._pins).toEqual(9);
    expect(frame._throws).toEqual(1);
    expect(frame.throwPoints()).toEqual(1);
  });

  it('is incomplete after 1 throw', function() {
    frame.play(1);
    expect(frame.isComplete()).toBeFalsy();
  });

  it('can be completed after 2 throws', function() {
    frame.play(1);
    frame.play(1);
    expect(frame.isComplete()).toBeTruthy();
  });

  it('can be completed after a strike', function(){
    frame.play(10);
    expect(frame.isComplete()).toBeTruthy();
  });

  it('can tally points for the first and second throws', function(){
    frame.play(3);
    frame.play(4);
    expect(frame.throwPoints()).toEqual(7);
    expect(frame._points).toEqual([3,4]);
  });

  it('separates the first and second throws', function(){
    frame.play(3);
    frame.play(4);
    expect(frame.firstThrow()).toEqual(3);
    expect(frame.secondThrow()).toEqual(4);
  });

  it('can identify a strike', function(){
    frame.play(10);
    expect(frame.isStrike()).toBeTruthy();
  }); 

  it('can identify a spare', function(){
    frame.play(6);
    frame.play(4);
    expect(frame.isSpare()).toBeTruthy();
  });

  it('can calculate total points after a strike', function(){
    frame.play(10);
    next_frame = new Frame;
    next_frame.play(1);
    next_frame.play(2);
    expect(frame.bonus(next_frame)).toEqual(3);
  });

  it('can calculate total points after 2 strikes', function(){
    frame.play(10);
    next_frame = new Frame;
    next_frame.play(10);
    next_next_frame = new Frame
    next_next_frame.play(3);
    expect(frame.bonus(next_frame,next_next_frame)).toEqual(13);
  });
});
