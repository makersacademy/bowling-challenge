describe('Scorecard', function() {
  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  it("should start with a total score of 0", function() {
    expect(scorecard.showTotal()).toEqual(0)
  });
});
