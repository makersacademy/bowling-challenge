"use strict";

describe("BonusFrame", function() {

  var bonusFrame;

  beforeEach(function() {
    bonusFrame = new BonusFrame("spare");
  });

  it("starts on roll 1", function() {
    expect(bonusFrame.roll).toEqual(1)
  })

  it("moves to the next roll if strike bonus", function() {
    bonusFrame = new BonusFrame("strike");
    bonusFrame.nextRoll();
    expect(bonusFrame.roll).toEqual(2)
    expect(bonusFrame.endGame).toEqual(false)
  })

  it("returns true for endGame if spare bonus", function() {
    bonusFrame.nextRoll();
    expect(bonusFrame.endGame).toEqual(true)
  })

  it("adds the user's score", function() {
    bonusFrame.addPoints(5)
    expect(bonusFrame.score).toEqual(5)
  })

  it("gives two rolls for a strike", function() {
    bonusFrame.checkNumRolls("strike")
    expect(bonusFrame.rolls).toEqual(2)
  })

  it("gives one roll for a spare", function() {
    bonusFrame.checkNumRolls("spare")
    expect(bonusFrame.rolls).toEqual(1)
  })
});
