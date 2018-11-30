'use strict';

describe('Frame', function() {

  var frame

  it('has a score of 0 when created', function() {
    frame = new Frame()
    expect(frame.getFrameTotalScore()).toEqual(0)
  })

  it('can report total score of rolls', function() {
    frame = new Frame()
    frame.addRoll(2)
    frame.addRoll(3)
    expect(frame.getFrameTotalScore()).toEqual(5)
  })

  it('can report individual score of one roll', function() {
    frame = new Frame()
    frame.addRoll(2)
    frame.addRoll(3)
    expect(frame.getIndividualFrameScore(1)).toEqual(3)
  })

  it('can report individual scores of alls rolls', function() {
    frame = new Frame()
    frame.addRoll(2)
    frame.addRoll(3)
    expect(frame.getFrameScores()).toEqual([2,3])
  })

})
