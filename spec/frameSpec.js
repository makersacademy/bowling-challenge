'use strict';

describe('Frame', function(){

  let frame 

  beforeEach(function() {
    frame = new Frame();
  })

  it('starts a frame with an empty score', function() {
    expect(frame.score).toEqual([]);
  })

  it('initializes with the correct round number', function() {
    frame = new Frame(4);
    expect(frame.round).toEqual(4);
  })

  it('adds the users score', function() {
    frame.addRoll(9);
    expect(frame.score).toEqual([9]);
  })

  it('can calculate if a strike has been thrown', function() {
    frame.addRoll(10);
    expect(frame.isStrike()).toBe(true);
  })

  it('can calculate if a spare has been thrown', function() {
    frame.addRoll(8);
    frame.addRoll(2);
    expect(frame.isSpare()).toBe(true);
  })
  
})