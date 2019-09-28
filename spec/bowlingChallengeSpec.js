describe("Scorecard", function () {

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  it('Expect score to be 0 when game starts', function () {
    expect(scorecard.playerScore).toEqual(0)
  });

  describe('#addOne', function () {
    it('Expect score to be 1 when player enters 1', function () {
      scorecard.addOne()
      expect(scorecard.playerScore).toEqual(1)
    })
  })

});
