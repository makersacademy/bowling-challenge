'use strict';

describe('Frame', function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  })

  it('has a current score', function() {
    expect(frame.viewScore()).toEqual(0);
  })

  it('can increase the score on first turn', function() {
    frame.enterTurn(5);
    expect(frame._firstTurn).toEqual(5);
    expect(frame.viewScore()).toEqual(5);
  })

  it('can increase the score on second turn', function() {
    frame.enterTurn(5);
    frame.enterTurn(3);
    expect(frame._secondTurn).toEqual(3);
    expect(frame.viewScore()).toEqual(8);
  })

  it('knows if frame is complete', function() {
    frame.enterTurn(1);
    frame.enterTurn(2);
    expect(frame.complete()).toEqual(true);
  })

  it('a strike completes a frame', function() {
    frame.enterTurn(10);
    expect(frame.complete()).toEqual(true);
  })

  it('can understand a spare', function() {
    frame.enterTurn(2);
    frame.enterTurn(8);
    expect(frame.spare()).toEqual(true);
  })

  it('can return first and second turns', function() {
    frame.enterTurn(2);
    frame.enterTurn(8);
    expect(frame.firstTurn()).toEqual(2);
    expect(frame.secondTurn()).toEqual(8);
  })

})