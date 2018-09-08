describe("Scorecard", function () {

  var scorecard;

  beforeEach(function () {
    scorecard = new Scorecard();
  });

  it("adds a roll to the currentFrame", function () {
    scorecard.addRoll(6);
    expect(scorecard.currentFrame).toContain(6);
  });

});