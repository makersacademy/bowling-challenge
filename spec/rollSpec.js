'use strict';

describe('Roll', function() {
  var roll;

  beforeEach(function() {
    roll = new Roll();
  });

  it('Adds the number from the first roll to the roll array', function() {
    roll.firstRoll(3);
    expect(roll._rolls).toEqual([3]);
  });

  it('Adds the number from the second roll to the roll array as well', function() {
    roll.firstRoll(3);
    roll.secondRoll(10);
    expect(roll._rolls).toEqual([3,10]);
  });

  it('Counts the number of pins knocked down by the first and second rolls', function() {
    roll.firstRoll(3);
    roll.secondRoll(4);
    expect(roll.summedRolls()).toEqual(7);
  });

  it('Checks whether the first roll resulted in a Strike', function() {
    roll.firstRoll(10);
    expect(roll.isStrike()).toBe(true);
  });

  it('Checks whether the first and second roll sums up to be a Spare', function() {
    roll.firstRoll(5);
    roll.secondRoll(5);
    expect(roll.isSpare()).toBe(true);
  });
});
