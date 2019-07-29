// 'use strict';

describe("BowlingCard", function() {
  var bowlingcard;
  beforeEach(function() {
  bowlingcard = new BowlingCard();
});

  it('should have an empty score array with 10 rows', function() {
    expect(bowlingcard.totalFrameScore.length).toEqual(10);
  });

  it('should have null values to start with', function() {
    for (var score = 0; score < 10; score++) {
    expect(bowlingcard.totalFrameScore[score]).toBeNull();};
  });

  it('should update the gameFrame object with the first bowl score', function() {
    bowlingcard.firstBowl(5);
    expect(bowlingcard.gameFrame.frameScoreOne).toEqual(5);
  });

  it('should update the gameFrame object with the second bowl score', function() {
    bowlingcard.firstBowl(5);
    bowlingcard.secondBowl(4)
    expect(bowlingcard.gameFrame.frameScoreTwo).toEqual(4);
    expect(bowlingcard.totalFrameScore[0]).toEqual(bowlingcard.gameFrame);
  });


});
