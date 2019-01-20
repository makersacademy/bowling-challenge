describe('Feature - Gutter Game', function(){

  var scorecard;
  var frame;

  beforeEach( () => {
    scorecard = new ScoreCard();
    frame = new Frame([0, 0]);
  });

  it('Game is completed and total score returned  ', function(){
    for (var i = 0; i < 10; i++) {
      scorecard.addFrame([0, 0]);
    };
    expect(scorecard.isComplete()).toEqual(true);
    expect(scorecard.score).toEqual(0);
  });

});