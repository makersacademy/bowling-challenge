describe('Scorecard', function() {
  var scorecard;
  beforeEach(function() {
    scorecard = new Scorecard();
  });
  // The first test - Does my frame contain 3 objects [Score1, Score2, Score3[sum]]

  it('It allows value to be added to array', function() {
    expect(scorecard.firstBowl(5)).toEqual(scorecard.bowlOne)
  });
  it('Stores users firstBowl in bowlOne ', function() {
    scorecard.firstBowl(5)
    expect(scorecard.bowlOne).toEqual([5]);
  });


});
//frame(arrays),
