describe('A gutter game', function() {
  bowlingScorecard = new BowlingScorecard();
  it('score should equal 0 after 20 rolls', function(){
    for (var i=0; i< 20; i++) {
      bowlingScorecard.addScore(5);
    }
    expect(bowlingScorecard.score.not.toEqual(150);
  });
});
