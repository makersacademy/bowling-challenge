/* jshint -W117 */

describe('Frame', function() { 'use strict';

  it('calculates the total of two rolls', function() {
    var frame = new Frame([3,4]);
    expect(frame.totalFrame()).toEqual(7);
  })

  it('knows when is a spare', function() {
    var frame = new Frame([5,5]);
    expect(frame.isSpare()).toEqual(true);
  })

  it('knows when is a strike', function() {
    var frame = new Frame([10,0]);
    expect(frame.isStrike()).toEqual(true);
  })

  it('calculates a regular score', function() {
    var frame = new Frame([3,4]);
    var nextFrame = new Frame([1,1]);
    expect(frame.totalScore(nextFrame)).toEqual(7);
  })

  it('calculates a spare score', function() {
    var frame = new Frame([5,5]);
    var nextFrame = new Frame([3,4]);
    expect(frame.totalScore(nextFrame)).toEqual(13);
  })

  it('calculates a strike score', function() {
    var frame = new Frame([10,0]);
    var nextFrame = new Frame([3,4]);
    expect(frame.totalScore(nextFrame)).toEqual(17);
  })

  it('calculates a double strike score', function() {
    var frame = new Frame([10,0]);
    var nextFrame = new Frame([10,0]);
    var secondNextFrame = new Frame([3,4]);
    expect(frame.totalScore(nextFrame, secondNextFrame)).toEqual(23);
  })

});
