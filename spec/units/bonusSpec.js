'use strict';

describe('Bonus', function() {
  var bonus;

  beforeEach(function () {
    bonus = new Bonus(2);
  })

  describe('keeping track', function() {
    it('reduces its status by 1', function() {
      bonus.perRoll(3)
      expect(bonus.status).toBe(1)
    })

    it('saves the pins of the next roll', function() {
      bonus.perRoll(3)
      expect(bonus.extra).toBe(3)
    })
  })
})
