describe('Scores for each frame are cumulative when finalised', function() {
  it('should show combined score of all previous frames when frame score calculated (no bonuses)', function() {
    var scorecard = new Scorecard;
    scorecard.startGame();
    scorecard.roll(4)
    scorecard.roll(4)
    scorecard.roll(4)
    scorecard.roll(4)
    expect(scorecard.frameScores[0]).toEqual(8);
    expect(scorecard.frameScores[1]).toEqual(16);
  });
  it('should show combined score of all previous frames when frame score calculated (including spares)', function() {
    var scorecard = new Scorecard;
    scorecard.startGame();
    scorecard.roll(6)
    scorecard.roll(4)
    scorecard.roll(3)
    scorecard.roll(3)
    expect(scorecard.frameScores[0]).toEqual(13);
    expect(scorecard.frameScores[1]).toEqual(19);
  });
  it('should show combined score of all previous frames when frame score calculated (including strikes)', function() {
    var scorecard = new Scorecard;
    scorecard.startGame();
    scorecard.roll(10)
    scorecard.roll(10)
    scorecard.roll(3)
    scorecard.roll(3)
    expect(scorecard.frameScores[0]).toEqual(23);
    expect(scorecard.frameScores[1]).toEqual(39);
    expect(scorecard.frameScores[2]).toEqual(45);
  });
});
