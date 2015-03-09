describe("Bowling Scorecard", function() {

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  it("can add points to a total score", function() {
    scorecard.addPoint(4);
    expect(scorecard.totalScore).toEqual(4);
  });

  it("doesn't move to the next frame after only one bowl has been added", function() {
    scorecard.addPoint(4);
    expect(scorecard.currentFrame).toEqual(1);
  });

  it("moves to the next frame after two bowls have been added", function() {
    scorecard.addPoint(4);
    scorecard.addPoint(4);
    expect(scorecard.currentFrame).toEqual(2);
  });

  it("finishes the game after 10 frames", function() {
    playTenFrames();
    expect(scorecard.gameOver).toBe(true);
  });

  it("doesn't finish the game if less than 10 frames have been played", function() {
    scorecard.addPoint(4);
    expect(scorecard.gameOver).toBe(false);
  });

});

var playTenFrames = function() {
  for (var i = 20; i > 0; i--) {
    scorecard.addPoint(4);
  }
};