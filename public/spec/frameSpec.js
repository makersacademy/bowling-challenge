"use strict";

describe('Frame', function() {
  var frame;
  

  beforeEach(function() {
    frame = new Frame()
  })

  it('return the roll number', function() {
    expect(frame.rolls).toEqual([])
  })


  describe('starting frames', function() {

    it('will start with empty frames', function() {
      expect(frame.rolls.length).toEqual(0);
    })
  })


  describe('recording the scores', function() {

    it('recording the knocked down pins', function() {
      frame.recordScore(1);
      expect(frame.rolls[0]).toEqual(1);
      expect(frame.score).toEqual(1);
    })
  })
})
