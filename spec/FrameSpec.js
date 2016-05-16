'use strict'

describe('Frame', function(){

  var frame

  beforeEach(function() {
    frame = new Frame()
  })

  it('records a roll', function() {
    frame.bowl(2)
    expect(frame.firstRoll()).toEqual(2)
  })

  it('records a second roll', function() {
    frame.bowl(2)
    frame.bowl(7)
    expect(frame.secondRoll()).toEqual(7)
  })

  it('records roll number', function() {
    frame.bowl(2)
    expect(frame.rollNum()).toEqual(1)
    frame.bowl(5)
    expect(frame.rollNum()).toEqual(2)
  })

  it('tracks the score', function() {
    frame.bowl(2)
    frame.bowl(4)
    expect(frame.score()).toEqual(6)
  })

  it('can only roll once if a strike is bowled', function() {
    frame.bowl(10)
    frame.bowl(4)
    expect(frame.score()).toEqual(10)
    expect(frame.rollNum()).toEqual(1)
  })

})