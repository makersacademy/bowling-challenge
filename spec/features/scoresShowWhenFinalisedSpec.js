describe('Scores show when finalised', function() {
  it('should show show frame score after 2 rolls when no bonuses', function() {
    var scorecard = new Scorecard;
    scorecard.startGame();
    scorecard.roll(4)
    scorecard.roll(4)
    expect(scorecard.frameScores[0]).toEqual(8);
  });
  it('should show show frame score after 3 rolls when no bonus was spare', function() {
    var scorecard = new Scorecard;
    scorecard.startGame();
    scorecard.roll(6)
    scorecard.roll(4)
    expect(scorecard.frameScores[0]).toEqual('')
    scorecard.roll(3)
    expect(scorecard.frameScores[0]).toEqual(13)
  });
  it('should show show frame score after 3 rolls when bonus was strike', function() {
    var scorecard = new Scorecard;
    scorecard.startGame();
    scorecard.roll(10)
    expect(scorecard.frameScores[0]).toEqual('')
    scorecard.roll(4)
    expect(scorecard.frameScores[0]).toEqual('')
    scorecard.roll(3)
    expect(scorecard.frameScores[0]).toEqual(17)
  });
});
