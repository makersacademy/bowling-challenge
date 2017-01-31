'use strict';

describe('Roll', function() {
  var roll;

  beforeEach(function() {
    roll = new Roll();
  });

  it('performs a roll and sets a random number of hits', function() {
    roll.roll();
    expect(roll.getHitsFromRoll()).toBeGreaterThan(-1);
    expect(roll.getHitsFromRoll()).toBeLessThan(11);
  });

});
