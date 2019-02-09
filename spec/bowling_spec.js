describe('Features', function () {
  var scorecard;
  beforeEach(function() {
    scorecard = new Scorecard();
  });

  it('scorecard total starts at 0', function () {
    expect(scorecard.totalScore).toEqual(0);
  })
})
