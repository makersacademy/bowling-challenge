'use strict';

describe('Frame', function(){
  var frame;

  beforeEach(function(){
    frame = new Frame(1);
  });

  it('stores a number to identify itself', function(){
    expect(frame.NUMBER).toEqual(1);
  });

  it('starts with a total point score of zero', function(){
    expect(frame.returnpoints()).toEqual(0);
  });

  it('can update the total point for the frame', function(){
    frame.addpoints(7);
    expect(frame.returnpoints()).toEqual(7)
  });

  it('records a strike has occured and sets the points to null', function(){
    frame.firstroll(10);
    expect(frame.strike).toBe(true);
    expect(frame.POINTS).toBe(null);
  });

  it('records a spare has occured and sets the points to null', function(){
    frame.firstroll(3);
    frame.secondroll(7);
    expect(frame.spare).toBe(true);
    expect(frame.POINTS).toBe(null);
  });
});
