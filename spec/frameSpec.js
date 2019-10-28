'use strict';

describe('Frame', function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });
  
  it('is possible to start a new frame', function() {
    expect(frame).toEqual(frame)
  });

  it('begins a frame with a score of zero', function(){
    expect(frame.score).toEqual(0)
  })

  it('can store a roll', function() {
    frame.roll(7);
    expect(frame.rolls).toEqual([7])
  })

  it('can store 2 rolls', function() {
  frame.roll(4);
  frame.roll(4);
  expect(frame.rolls).toEqual([4,4])
  })

  it('knows its score', function() {
    frame.roll(7)
    frame.roll(2)
    expect(frame.score).toEqual(9)
  })

  it('registers a strike', function() {
    frame.roll(10);
    expect(frame.bonus).toEqual('strike')
  })

  it('registers a spare', function() {
    frame.roll(9);
    frame.roll(1);
    expect(frame.bonus).toEqual('spare')
  })
})