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
});
