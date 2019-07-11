"use strict";

describe('Frame', function() {
  var frame;
  

  beforeEach(function() {
    frame = new Frame()
  })

  it('return the roll number', function() {
    expect(frame.rolls).toEqual([])
  })
})
