'use strict';

describe('Final Frame', function () {

  var frame;

  beforeEach(function () {
    frame = new FinalFrame();
  });

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
    expect(frame.getScore()).toBe(0)
  })

  it('ends the frame if both rolls have been taken and no strikes or spares were made', function () {
    twoRolls();
    expect(frame.isFinished()).toBe(true)
  })

  it('allows for a third roll if a strike or spare was rolled', function () {
    threeRolls()
    expect(frame.getScore()).toBe(20)
  })

  it('ends the frame after three rolls if a strike or spare was rolled in the first two', function () {
    threeRolls();
    expect(function () { frame.bonusRoll(4) } ).toThrow(new Error ('Sorry game is over, no bonus throw'))
  })

  var twoRolls = function () {
    frame.firstRoll(3);
    frame.secondRoll(6);
  }

  var threeRolls = function () {
    frame.firstRoll(10)
    frame.secondRoll(3)
    frame.bonusRoll(7)
  }
});