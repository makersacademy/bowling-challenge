'use strict'

describe('Roll', function() {

  var roll

  beforeEach( function() {
    roll = new Roll(5)
  })


  it('has a score', function() {
    expect(roll.score()).toEqual(5)
  })

})