'use strict'

describe('Roll', function() {

  var roll

  beforeEach( function() {
    roll = new Roll(5)
  })


  it('has a score', function() {
    expect(roll.score()).toEqual(5)
  })

  it('can check if it was a strike', function() {
    roll = new Roll(10)
    expect(roll.isStrike()).toEqual(true)
  })

  it('can store it\'s roll number', function() {
    roll.setRollNumber(3)
    expect(roll.rollNumber()).toEqual(3)
  })

})