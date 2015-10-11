describe ('Scorecard', function(){
  var scorecard;

  beforeEach(function(){
    scorecard = new Scorecard();
  });

  it ('can log roll score', function(){
    scorecard.logScore(1);
    expect(scorecard.rollScore[0]).toEqual(1);
  });

  it ('can update frame score, no strike or spare', function(){
    scorecard.logScore(1);
    scorecard.logScore(2);
    scorecard.updateFrameScore();
    expect(scorecard.frameScore[0]).toEqual(3);
  });

  it ('can calculate total score', function(){
    scorecard.logScore(1);
    scorecard.logScore(2);
    scorecard.updateFrameScore();
    expect(scorecard.calculateTotalScore()).toEqual(3);
  });
});
