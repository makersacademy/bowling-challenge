'use strict';

describe('Frame', function() {

  var frame

  beforeEach(function() {
    frame = new Frame()
  })

  it('has a score of 0 when created', function() {
    expect(frame.getFrameScore()).toEqual(0)
  })

  it('can report total score of rolls', function() {
    frame.addRoll(2)
    frame.addRoll(3)
    expect(frame.getFrameScore()).toEqual(5)
  })

  it('can report individual score of one roll', function() {
    frame.addRoll(2)
    frame.addRoll(3)
    expect(frame.getIndividualScore(1)).toEqual(3)
  })

  it('can report individual scores of all rolls', function() {
    frame.addRoll(2)
    frame.addRoll(3)
    expect(frame.getScores()).toEqual([2,3])
  })

  it('reports the number of rolls', function() {
    frame.addRoll(2)
    frame.addRoll(3)
    expect(frame.getNumberOfRolls()).toEqual(2)
  })

  it('reports that the frame is a strike', function() {
    frame.addRoll(10)
    expect(frame.getStatus()).toEqual("strike")
  })

  it('reports that the frame is a spare', function() {
    frame.addRoll(4)
    frame.addRoll(6)
    expect(frame.getStatus()).toEqual("spare")
  })

  it('reports that the frame is a zero score', function() {
    frame.addRoll(0)
    frame.addRoll(0)
    expect(frame.getStatus()).toEqual("missed")
  })

  it('reports that the frame is over', function() {
    frame.addRoll(4)
    frame.addRoll(4)
    expect(frame.getStatus()).toEqual("over")
  })

  it('reports that there have been no rolls', function() {
    expect(frame.getStatus()).toEqual("norolls")
  })

  it('reports that the frame is not over', function() {
    frame.addRoll(4)
    expect(frame.getStatus()).toEqual("notover")
  })

})
