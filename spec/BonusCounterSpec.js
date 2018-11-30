"use strict"

describe("Bonus Counter", function() {
  var bonusCounter;

  describe("lifespan", function() {
    it("can be created with a life of 2 for a strike", function() {
      bonusCounter = new BonusCounter(2);
      expect(bonusCounter.life).toEqual(2);
    });
    it("can be created with a life of 1 for a spare", function() {
      bonusCounter = new BonusCounter(1);
      expect(bonusCounter.life).toEqual(1);
    });
    it("is reduced by 1 when updated", function() {
      bonusCounter = new BonusCounter(2);
      bonusCounter.update();
      expect(bonusCounter.life).toEqual(1);
    });
  });

  describe("counting bonuses", function() {
    it("has zero score to begin with", function() {
      bonusCounter = new BonusCounter(2);
      expect(bonusCounter.bonus).toEqual(0);
    });
    it("increases the bonus amount by the given value", function() {
      bonusCounter = new BonusCounter(2);
      bonusCounter.add(3);
      expect(bonusCounter.bonus).toEqual(3);
      bonusCounter.add(5);
      expect(bonusCounter.bonus).toEqual(8);
    });
  });
});
