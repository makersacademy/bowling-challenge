describe ('Scorecard', function(){
  var scorecard;

  beforeEach(function(){
    scorecard = new Scorecard();
  });

  it ('logs score of each roll', function(){
    scorecard.logScore(1);
    expect(scorecard.rollScore[0]).toEqual(1);
  });
});
