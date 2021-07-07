'use strict';

describe('Scorecard', function () {
  var scorecard;

  beforeEach(function () {
    scorecard = new Scorecard();
  });

  it('has the current score of completed frames', function () {
    scorecard.frameArray[0].reportBowlOne(4);
    scorecard.frameArray[0].reportBowlTwo(5);
    scorecard.frameArray[1].reportBowlOne(4);
    scorecard.frameArray[1].reportBowlTwo(5);

    scorecard.computeScore();
    expect(scorecard.computeScore()).toEqual(18);
  });

  it('adds spare bonus', function () {
    scorecard.frameArray[0].reportBowlOne(3);
    scorecard.frameArray[0].reportBowlTwo(7);
    scorecard.frameArray[1].reportBowlOne(8);
    expect(scorecard.computeScore()).toEqual(26);
  });

  it('adds strike bonus', function () {
    scorecard.frameArray[0].reportBowlOne(10);
    scorecard.frameArray[1].reportBowlOne(8);
    scorecard.frameArray[1].reportBowlTwo(1);
    expect(scorecard.computeScore()).toEqual(28);
  });
});
