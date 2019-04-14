describe('Strike Game', function() {
  it('should show score of 300 for perfect game (12 rolls of 10)', function() {
    var scorecard = new Scorecard;
    scorecard.startGame();
    for(i = 1; i <= 12; i++) { scorecard.roll(10) }
    expect(scorecard.totalScore).toEqual(300);
  });
});
