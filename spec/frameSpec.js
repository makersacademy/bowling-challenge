'use strict';

describe('Frame', function() {

  var frame;

  beforeEach(function() {
    frame = new Frame;
  });

  it('has a default total score of zero', function() {
    expect(frame.totalScore).toEqual(0);
  });

  it('has a starting score of zero', function() {
    expect(frame.getCurrentFrameScore()).toEqual(0);
  });

  it('has a maximum score of thirty', function() {
    expect(frame.MAX_SCORE).toEqual(30);
  });

  it('can determine a strike', function() {
    frame.addRollOne(10);
    expect(frame.isStrike()).toEqual(true);
  });

  it('can determine a spare', function() {
    frame.addRollOne(2);
    frame.addRollTwo(8);
    expect(frame.isSpare()).toEqual(true);
  });

  it('stores a score for the first roll', function() {
    frame.addRollOne(9);
    expect(frame.getCurrentFrameScore()).toEqual(9);
  });

  it('stores a score for the second roll', function() {
    frame.addRollOne(9);
    frame.addRollTwo(1);
    expect(frame.getCurrentFrameScore()).toEqual(10);
  });

  it('stores a score for a single bonus', function() {
    frame.addRollOne(9);
    frame.addRollTwo(1);
    frame.addBonusOne(10);
    expect(frame.getCurrentFrameScore()).toEqual(20);
  });

  it('stores a score for a second bonus', function () {
    frame.addRollOne(10);
    frame.addBonusOne(8);
    frame.addBonusTwo(1);
    expect(frame.getCurrentFrameScore()).toEqual(19);
  });

  it('calculates three consecutive strikes', function() {
    frame.addRollOne(10);
    frame.addBonusOne(10);
    frame.addBonusTwo(10);
    expect(frame.getCurrentFrameScore()).toEqual(30);
  });

  it('calculates a gutter frame', function() {
    frame.addRollOne(0);
    frame.addRollTwo(0);
    expect(frame.getCurrentFrameScore()).toEqual(0);
  });

  it('clears the frame score', function() {
    frame.addRollOne(10);
    frame.addBonusOne(10);
    frame.addBonusTwo(10);
    frame.clearScore();
    expect(frame.getCurrentFrameScore()).toEqual(0);
  });

});
