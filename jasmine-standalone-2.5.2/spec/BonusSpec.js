'use strict';

describe("Bonus", function() {

  var bonus;

  beforeEach(function() {
    bonus = new Bonus();
  });

  it("adds points to its score", function() {
    bonus.addToBonus(1);
    expect(bonus.getScore()).toEqual([1]);
  })

  it("knows when it is complete", function() {
    bonus.addToBonus(1);
    expect(bonus.isOver()).toEqual(true);
  })

})
