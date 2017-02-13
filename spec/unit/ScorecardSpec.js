describe("Scoreboard", function(){
  var scorecard
  var score

  beforeEach(function(){
    scorecard = new Scorecard;
    score = 1;
  });

  describe('#addToScore', function(){
    it('adds a score to the scores array', function(){
      scorecard.addToScore(score);
      expect(scorecard.scores()).toEqual([1])
    });
  });

  describe('#frameOneScore', function(){
    it('tells you the score of the first frame', function(){
      scorecard.addToScore(score);
      scorecard.addToScore(score);
      expect(scorecard.frameOneScore()).toEqual(2)
    });
  });

  describe('#frameTwoScore', function(){
    it('tells you the score of the second frame', function(){
      scorecard.addToScore(score);
      scorecard.addToScore(score);
      scorecard.addToScore(score);
      scorecard.addToScore(score);
      expect(scorecard.frameTwoScore()).toEqual(4)
    });
  });
});
