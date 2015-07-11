describe('BowlingScoreCard', function() {
  var bowlingScoreCard;

  beforeEach(function() {
    bowlingScoreCard = new BowlingScoreCard();
  });

  it('has 10 frames', function() {
    expect(bowlingScoreCard.allFrames.length).toEqual(10);
  });

  it('has two rolls per frame', function() {
    expect(bowlingScoreCard.roll.length).toEqual(2);
  });

  it('starts with a total score of 0', function() {
    expect(bowlingScoreCard.totalScore).toEqual(0);
  });

});
