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

  it("should score 5 when 3 then 2 pins knocked over", function() {
    scorecard.bowl(3);
    scorecard.bowl(2);
    expect(scorecard.score()).toEqual(5);
  });

  it("should not accept 11 pins being knocked over in 1 bowl", function() {
    expect(function() { scorecard.bowl(11); }).toThrow();
  });

  it ("should start on the first frame", function() {
    expect(scorecard.whichFrame()).toEqual(1);
  });

  it("should move to the second frame after two bowls", function() {
    scorecard.bowl(1);
    scorecard.bowl(5);
    expect(scorecard.whichFrame()).toEqual(2);
  });

});
