describe("Bowling Scorecard", function() {
  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  it("should record the result of the first bowl", function() {
    scorecard.bowl(6);
    expect(scorecard.currentFrame).toEqual([6]);
  });

  it("should record the result of the second bowl", function() {
    scorecard.bowl(6);
    scorecard.bowl(3);
    expect(scorecard.currentFrame).toEqual([6, 3]);
  });

  it("should record the result of the first round when complete", function() {
    scorecard.bowl(6);
    scorecard.bowl(3);
    scorecard.bowl(4);
    expect(scorecard.allFrames).toEqual( [ [6, 3] ] );
  });

});