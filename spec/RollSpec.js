'use strict'

describe('Roll', function(){

  var roll

  beforeEach(function() {
    roll = new Roll(4)
  })

  it('returns number of pins knocked down for a roll', function() {
    expect(roll.score()).toEqual(4)
  })

})