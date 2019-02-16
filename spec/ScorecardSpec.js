'use strict';

describe("Scorecard", function() {

  var scorecard;
  var game;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  it("gutter game score is zero", function() {
    for (var i = 0; i < 20; i++) {
      scorecard.turn(0);
    }
    expect(scorecard.total()).toEqual(0);
  });

  it("1 pin per roll scores 20", function() {
    for (var i = 0; i < 20; i++) {
      scorecard.turn(1);
    }
    expect(scorecard.total()).toEqual(20);
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

  it("calculate score for a spare", function() {
    scorecard.turn(3);
    scorecard.turn(3);
    scorecard.turn(5);
    scorecard.turn(5);
    scorecard.turn(10);
    expect(scorecard.frameResult(2)).toEqual(20);
  });

  it("can run 10th frame", function() {
    for (var i = 0; i < 18; i++) {
      scorecard.turn(1);
    }
    scorecard.turn(10);
    scorecard.turn(1);
    scorecard.turn(1);
    expect(scorecard.getFrames()[9]).toEqual([10, 1, 1]);
  });

  it("can score 10th frame - Spare", function() {
    for (var i = 0; i < 18; i++) {
      scorecard.turn(1);
    }
    scorecard.turn(5);
    scorecard.turn(5);
    scorecard.turn(1);
    expect(scorecard.frameResult(10)).toEqual(11);
  });

  it("can score 10th frame - Strike", function() {
    for (var i = 0; i < 18; i++) {
      scorecard.turn(1);
    }
    scorecard.turn(10);
    scorecard.turn(1);
    scorecard.turn(1);
    expect(scorecard.frameResult(10)).toEqual(12);
  });

  it("can score the perfect game", function() {
    for (var i = 0; i < 12; i++) {
      scorecard.turn(10);
    }
    expect(scorecard.total()).toEqual(300);
  });


});
