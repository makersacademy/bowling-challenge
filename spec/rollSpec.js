'use strict';

describe('Roll', function() {

  var roll

  it('can report a score', function() {
    roll = new Roll(5)
    expect(roll.getRollScore()).toEqual(5)
  })

  it('raises an error if using an invalid score', function() {
    expect(function() { roll = new Roll(-1) }).toThrow()
    expect(function() { roll = new Roll(11) }).toThrow()
  })


})
