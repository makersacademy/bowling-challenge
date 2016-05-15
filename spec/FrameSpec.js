'use strict'

describe('Frame', function(){

  var frame
  var roll
  var rollOne
  var rollTwo

  beforeEach(function() {
    frame = new Frame()
    roll = {
      score: function() {
        return value
      }
    }
    rollOne = jasmine.createSpy('rollOne')
    rollTwo = jasmine.createSpy('rollTwo')
  })

  it('records a roll', function() {
    frame.bowl(rollOne)
    expect(frame.firstRoll()).toEqual(rollOne)
  })

  it('records a second roll', function() {
    frame.bowl(rollOne)
    frame.bowl(rollTwo)
    expect(frame.secondRoll()).toEqual(rollTwo)
  })

  it('records roll number', function() {
    frame.bowl(rollOne)
    expect(frame.rollNum()).toEqual(1)
    frame.bowl(rollOne)
    expect(frame.rollNum()).toEqual(2)
  })

  it('tracks the score', function() {
    spyOn(roll, 'score').and.returnValue(3)
    frame.bowl(roll)
    frame.bowl(roll)
    expect(frame.score()).toEqual(6)
  })



})