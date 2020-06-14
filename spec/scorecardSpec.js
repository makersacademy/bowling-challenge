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
    expect(scorecard.currentScore).toEqual(18);
  });

  it('adds spare bonus', function () {
    scorecard.frameArray[0].reportBowlOne(3);
    scorecard.frameArray[0].reportBowlTwo(7);
    scorecard.frameArray[1].reportBowlOne(8);
    scorecard.computeScore();
    expect(scorecard.frameArray[0].frameScore).toEqual(18);
  });

  it('adds strike bonus', function () {
    scorecard.frameArray[0].reportBowlOne(10);
    scorecard.frameArray[1].reportBowlOne(8);
    scorecard.frameArray[1].reportBowlTwo(1);
    scorecard.computeScore();
    expect(scorecard.frameArray[0].frameScore).toEqual(19);
  });
});
