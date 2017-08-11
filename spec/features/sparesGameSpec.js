describe('A spares game', function() {
  var bowlingScorecard;
  beforeEach(function(){
    bowlingScorecard = new BowlingScorecard();
  });
    it('score should equal 150 after 21 rolls', function(){
    console.log(bowlingScorecard.score());
    for (var i=0; i< 21; i++) {
      bowlingScorecard.addScore(5);
    }
    expect(bowlingScorecard.score()).toEqual(150);
  });
});
