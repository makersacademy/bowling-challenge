'use strict';

describe("Bonus", function() {

  var bonus;

  describe("is a strike", function() {

    beforeEach(function() {
      bonus = new Bonus("strike");
    });

    describe("::new", function() {
      it("should create new Bonus instance", function() {
        expect(bonus instanceof Bonus).toBe(true);
      });
    });

    it("consists of 2 rolls if type is strike", function() {
      expect(bonus.numberOfRolls).toEqual(2);
    })

    it("adds points to its score", function() {
      bonus.addToBonus(1);
      expect(bonus.getScore()).toEqual(1);
    })

    it("knows when it is not over", function() {
      bonus.addToBonus(1);
      expect(bonus.isOver()).toEqual(false);
    })

    it("knows when it is over", function() {
      bonus.addToBonus(1);
      bonus.addToBonus(1);
      expect(bonus.isOver()).toEqual(true);
    })
  })

  describe("is a spare", function() {

    beforeEach(function() {
      bonus = new Bonus("spare");
    });

    it("consists of 1 roll if type is strike", function() {
      expect(bonus.numberOfRolls).toEqual(1);
    })

    it("knows when it is over", function() {
      bonus.addToBonus(1);
      expect(bonus.isOver()).toEqual(true);
    })
  })

})
