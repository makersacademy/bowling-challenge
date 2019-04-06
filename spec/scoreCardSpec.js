describe("ScoreCard", function() {
  var scoreCard;
  var frame;

  beforeEach(function() {
    scoreCard = Object.create(ScoreCard);
    frame = jasmine.createSpyObj("frame", ["roll"]);
    frame.roll([0, 0]);
  });

  it("creates a scorecard object", function() {
    expect(scoreCard.totalScore()).toBe(0);
  });

  it("can add a pair of rolls", function() {
    expect(scoreCard.addFrameRolls).toBeDefined();
  });
});
