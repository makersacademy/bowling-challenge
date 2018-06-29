"use strict";

var describe, it, expect, beforeEach, IndividualScores;

describe("Individual Scores", function() {

  var individualScores;

  beforeEach(function() {
    individualScores = new IndividualScores();
  });

  it("identifies a strike", function() {
    expect(individualScores.isStrike(10)).toEqual(true);
  });

  it("indentifies two consecutive strikes", function() {
    expect(individualScores.isConsecutiveFrameStike(10, 10)).toEqual(true);
  });

  it("identifies a final frame strike with a strike bonus", function() {
    expect(individualScores.isFinalFrameStrikeWithBonusStrike(9, 10, 10)).toEqual(true);
  });

  it("identifies a spare", function() {
    expect(individualScores.isSpare(9, 1)).toEqual(true);
  });

});
