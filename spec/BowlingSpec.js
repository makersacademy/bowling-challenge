describe("Scorecard", function() {
  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  it("should record a pin being knocked over", function() {
    scorecard.bowl(1);
    expect(scorecard.score()).toEqual(1);
  });

});
