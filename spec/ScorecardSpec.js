'use strict';

describe("Scorecard", function() {

  var scorecard;
  var game;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  it("gutter game score is zero", function() {
    expect(scorecard.total([[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]])).toEqual(0);
  });

  it("1 pin per roll scores 20", function() {
    expect(scorecard.total([[1, 1],[1, 1],[1, 1],[1, 1],[1, 1],[1, 1],[1, 1],[1, 1],[1, 1],[1, 1]])).toEqual(20);
  });

  it("calculate score for 1st frame", function() {
    scorecard.turn(1);
    scorecard.turn(2);
    scorecard.turn(3);
    expect(scorecard.frameResult(1)).toEqual(3);
  });

  it("can identify spare", function() {
    scorecard.turn(5);
    scorecard.turn(5);
    scorecard.turn(5);
    expect(scorecard.isSpare(1)).toEqual(true);
  });

  it("can identify strike", function() {
    scorecard.turn(10);
    scorecard.turn(5);
    scorecard.turn(5);
    expect(scorecard.isStrike(1)).toEqual(true);
  });

  it("calculate score for a strike", function() {
    scorecard.turn(10);
    scorecard.turn(1);
    scorecard.turn(1);
    expect(scorecard.frameResult(1)).toEqual(12);
  });



});
