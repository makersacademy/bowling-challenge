describe('Feature - Scoring Game', function(){

  var scorecard;
  var frame;

  beforeEach( () => {
    scorecard = new ScoreCard();
    frame = new Frame([5, 3]);
  });

  it('Game is completed and total score returned', function(){
    for (var i = 0; i < 10; i++) {
      scorecard.addFrame([5, 3]);
    };
    expect(scorecard.finalScore()).toEqual(80);
  });
});