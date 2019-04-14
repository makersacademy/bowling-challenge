describe('Gutter Game', function() {
  it('should score each frame as 0', function() {
    var scorecard = new Scorecard;
    scorecard.startGame();
    for(i = 1; i <= 20; i++) { scorecard.roll(0) }
    for(i = 0; i < 10; i++) {
      expect(scorecard.frames[i].score()).toEqual(0);
    }
  });

  it('should have total score of 0 after 20 rolls of 0', function() {
    var scorecard = new Scorecard;
    scorecard.startGame();
    for(i = 1; i <= 20; i++) { scorecard.roll(0) }
    expect(scorecard.totalScore).toEqual(0);
  });
});
