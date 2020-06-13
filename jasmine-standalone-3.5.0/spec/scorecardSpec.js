describe('Scorecard', function () {

  var scorecard

  beforeEach(function () {
    scorecard = new Scorecard();
  });

  it('starts with a score of 0', function () {
    expect(scorecard.score).toEqual(0);
  });

  it('starts with a player', function () {
    expect(scorecard.player).toEqual(1);
  });
});
