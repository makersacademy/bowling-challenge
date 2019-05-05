describe('Scorecard', function() {
  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  it("should start with a total score of 0", function() {
    expect(scorecard.showTotal()).toEqual(0)
  });

  it("increases frame number after strike", function() {
    scorecard.roll(10);
    expect(scorecard.showFrame()).toEqual(1)
  });

  it("adds 10 to the rolls array after a strike", function() {
    scorecard.roll(10);
    expect(scorecard.showRolls()).toEqual([10])
  });
});
