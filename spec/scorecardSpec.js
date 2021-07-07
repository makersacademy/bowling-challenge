describe('Scorecard', function() {
  var scorecard;
  beforeEach(function() {
    scorecard = new Scorecard();
  });
  // The first test - Does my frame contain 3 objects [Score1, Score2, Score3[sum]]

  it('It allows firstbowl value to be added to be added to frame', function() {
    expect(scorecard.firstBowl(5)).toEqual(scorecard.bowlOne)
  });

  it('Stores users firstBowl in bowlOne ', function() {
    scorecard.firstBowl(5)
    expect(scorecard.bowlOne).toEqual([5]);
  });

  it('Stores users secondBowl in bowlTwo', function () {
    scorecard.secondBowl(3)
    expect(scorecard.bowlTwo).toEqual([3]);
  });

  it('Calculates the users frame total', function () {
    scorecard.firstBowl(5)
    scorecard.secondBowl(3)
    scorecard.roundSummary()
    expect(scorecard.frameTotal).toEqual([8])
  });

  xit('If first bowl is a strike, second bowl is skipped', function() {
    //if bowl.One

  });

});
//frame(arrays),
