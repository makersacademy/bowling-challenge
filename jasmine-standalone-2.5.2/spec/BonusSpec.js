'use strict';

describe("Bonus", function() {

  var bonus;

  describe("is a strike", function() {

    beforeEach(function() {
      bonus = new Bonus("strike");
    });

    it("has gets points from 2 rolls if type is strike", function() {
      expect(bonus.numberOfRolls).toEqual(2);
    })

    it("adds points to its score", function() {
      bonus.addToBonus(1);
      expect(bonus.getScore()).toEqual(1);
    })

    it("knows when it is not complete", function() {
      bonus.addToBonus(1);
      expect(bonus.isOver()).toEqual(false);
    })

    it("knows when it is complete", function() {
      bonus.addToBonus(1);
      bonus.addToBonus(1);
      expect(bonus.isOver()).toEqual(true);
    })
  })

  describe("is a spare", function() {

    beforeEach(function() {
      bonus = new Bonus("spare");
    });

    it("has gets points from 1 rolls if type is strike", function() {
      bonus = new Bonus("spare");
      expect(bonus.numberOfRolls).toEqual(1);
    })

    it("knows when it is complete", function() {
      bonus.addToBonus(1);
      expect(bonus.isOver()).toEqual(true);
    })
  })


})
