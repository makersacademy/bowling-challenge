describe('A gutter game', function() {
  var bowlingScorecard = new BowlingScorecard();
  beforeEach(function(){
    bowlingScorecard = new BowlingScorecard();
  });
  it('score should equal 0 after 20 rolls', function(){
    for (var i=0; i< 10; i++) {
      bowlingScorecard.addScore(0);
    }
    expect(bowlingScorecard.score()).toEqual(0);
  });
});
