'use strict';

describe('Roll', function() {
  var roll;

  beforeEach(function() {
    roll = new Roll();
  });

  it('Counts the number of pins knocked down by the first and second rolls', function() {
    roll.firstRoll(3);
    roll.secondRoll(4);
    expect(roll.summedRolls()).toEqual(7);
  });
});
