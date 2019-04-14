describe('No Bonus Game', function() {
  it('should have total score of 40 after 20 rolls of 2', function() {
    var scorecard = new Scorecard;
    scorecard.startGame();
    for(i = 1; i <= 20; i++) { scorecard.roll(2) }
    expect(scorecard.totalScore).toEqual(40);
  });
  it('should show score of 62 after mixed rolls with no spares or strikes', function() {
    var scorecard = new Scorecard;
    scorecard.startGame();
    scorecard.roll(2);
    scorecard.roll(3);
    scorecard.roll(4);
    scorecard.roll(4);
    scorecard.roll(4);
    scorecard.roll(1);
    scorecard.roll(8);
    scorecard.roll(0);
    scorecard.roll(9);
    scorecard.roll(0);
    scorecard.roll(5);
    scorecard.roll(2);
    scorecard.roll(4);
    scorecard.roll(5);
    scorecard.roll(2);
    scorecard.roll(0);
    scorecard.roll(1);
    scorecard.roll(4);
    scorecard.roll(2);
    scorecard.roll(2);
    expect(scorecard.totalScore).toEqual(62);
  });
});
