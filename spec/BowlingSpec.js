describe("Scorecard", function() {
  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  it("should score 1 when a pin is knocked over", function() {
    scorecard.bowl(1);
    expect(scorecard.score()).toEqual(1);
  });

  it("should start with a score of 0", function() {
    expect(scorecard.score()).toEqual(0);
  });

});
