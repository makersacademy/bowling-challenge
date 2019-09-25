describe("Scorecard", function () {

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  it('Expect score to be 0 when game starts', function () {
    expect(scorecard.playerScore).toEqual(0)
  });
});
