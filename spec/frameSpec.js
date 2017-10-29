'use strict';

describe('Frame', function () {

  var frame;

  beforeEach(function () {
    frame = new Frame();
  })

  it('has 10 pins at the start of the frame', function () {
    expect(frame._pinsRemaining).toBe(10)
  })

  it('records the number of pins knocked down in the first roll', function () {
    frame.firstRoll(3);
    expect(frame._pinsKnockedDown[0]).toBe(3)
  })

  it('records the number of pins knocked down in the second roll', function () {
    twoRolls();
    expect(frame._pinsKnockedDown[1]).toBe(6)
  })

  it('has a frame score of zero before the first roll', function () {
    expect(frame.returnScore()).toBe(0)
  })

  it('can return the frame score after the first roll', function () {
    frame.firstRoll(4);
    expect(frame.returnScore()).toBe(4)
  })

  it('can return the total frame score before bonuses applied', function () {
    twoRolls();
    expect(frame.returnScore()).toBe(9)
  })

  it('ends the frame if both rolls have been taken', function () {
    twoRolls();
    expect(frame.isFinished()).toBe(true)
  })

  it('ends the frame if the first roll is a strike', function () {
    frame.firstRoll(10)
    expect(frame.isFinished()).toBe(true)
  })

  var twoRolls = function () {
    frame.firstRoll(3);
    frame.secondRoll(6);
  }
})