'use strict';

describe ('Frame', function () {

var frame;

beforeEach(function () {
  frame = new Frame();
})

  it('has starts 10 pins', function () {
    expect(frame._pinsRemaining).toBe(10)
  })

  it('starts on the first roll', function () {
    expect(frame._rollTurn).toBe(1)
  })

  it('records the number of pins knocked down in the first roll', function () {
    frame.firstRoll(3);
    expect(frame._pinsKnockedDown[0]).toBe(3)
  })

  it('records the number of pins knocked down in the second roll', function () {
    frame.firstRoll(3);
    frame.secondRoll(6);
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
    frame.firstRoll(3);
    frame.secondRoll(6);
    expect(frame.returnScore()).toBe(9)
  })
})

