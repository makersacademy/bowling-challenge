describe('A perfect game', function() {
  var bowlingScorecard = new BowlingScorecard();
  it('score not equal 300 after 11 rolls', function(){
    for (var i=0; i< 11; i++) {
      bowlingScorecard.addScore(10);
    }
    expect(bowlingScorecard.score()).not.toEqual(300);
  });
  it('score equals 300 after 12 rolls', function(){
    for (var i=0; i< 12; i++) {
      bowlingScorecard.addScore(10);
    }
    expect(bowlingScorecard.score()).toEqual(300);
  });
});
