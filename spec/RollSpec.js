'use strict';

describe('Roll', function() {
  var roll;

  beforeEach(function() {
    roll = new Roll();
  });

  it('roll with random hits', function() {
    roll.roll();
    expect(roll.getHitsFromRoll()).toBeGreaterThan(-1);
    expect(roll.getHitsFromRoll()).toBeLessThan(11);
  });

});
