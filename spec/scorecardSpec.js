describe('Scorecard', function() {
  var scorecard;
  beforeEach(function() {
    scorecard = new Scorecard();
  });
  // The first test - Does my frame contain 3 objects [Score1, Score2, Score3[sum]]
  it('FRAME: scorecheck returns 5', function() {
    expect(scorecard.scorecheck()).toEqual(5);
  })
});
//frame(arrays), 
