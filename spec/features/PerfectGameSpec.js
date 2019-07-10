describe ('Perfect Game', function () {
  var scorecard;

  beforeEach (function() {
    scorecard = new ScoreCard();
  });

  it('If a user rolls 12 strikes, they should have 300 points and game is over', function () {
    for (i=0; i<12; i++) {
      scorecard.roll(10);
      console.log(scorecard.total)
    };
    expect(scorecard.total).toEqual(300)
    expect(function() {scorecard.roll(4)}).toThrow('Game is Over')
  });

  //it('test', function () {
    //scorecard.roll(10);
    //scorecard.roll(5);
    //scorecard.roll(3);
  //});
});
