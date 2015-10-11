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

  it ('can refresh the scores', function(){
    scorecard.logScore(1);
    scorecard.refreshScores(2);
    expect(scorecard.rollScore[1]).toEqual(2);
    expect(scorecard.frameScore[0]).toEqual(3);
  });

  it ('can start a new frame after two rolls, no strike', function(){
    scorecard.refreshScores(1);
    scorecard.refreshScores(2);
    expect(scorecard.rollLeftInFrame).toEqual(2);
  });

  it ('can count bonus score for a spare', function(){
    scorecard.refreshScores(7);
    scorecard.refreshScores(3);
    scorecard.refreshScores(1);
    expect(scorecard.frameScore[0]).toEqual(11);
  });
});
