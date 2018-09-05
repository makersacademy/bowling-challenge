describe("Score", function() {
  var score;

  beforeEach(function() {
    score = new Score();
  });

  it("should have an initial score of 0", function() {
    expect(score.score()).toEqual(0);
  });
});
