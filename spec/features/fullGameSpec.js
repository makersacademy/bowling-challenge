describe('Gutter Game', function(){
  it('has a final score of 0', function(){
    scorecard = new Scorecard();

    scorecard.addFrameScore(0, 0);
    scorecard.addFrameScore(0, 0);
    scorecard.addFrameScore(0, 0);
    scorecard.addFrameScore(0, 0);
    scorecard.addFrameScore(0, 0);
    scorecard.addFrameScore(0, 0);
    scorecard.addFrameScore(0, 0);
    scorecard.addFrameScore(0, 0);
    scorecard.addFrameScore(0, 0);
    scorecard.addFrameScore(0, 0);

    expect(scorecard.showScore()).toEqual(0);
  });
});

describe('Perfect Game', function(){
  it('has a final score of 300', function(){
    it('has a final score of 0', function(){
      scorecard = new Scorecard();

      scorecard.addFrameScore(10, 0);
      scorecard.addFrameScore(10, 0);
      scorecard.addFrameScore(10, 0);
      scorecard.addFrameScore(10, 0);
      scorecard.addFrameScore(10, 0);
      scorecard.addFrameScore(10, 0);
      scorecard.addFrameScore(10, 0);
      scorecard.addFrameScore(10, 0);
      scorecard.addFrameScore(10, 0);
      scorecard.addFrameScore(10, 0);

      expect(scorecard.showScore()).toEqual(300);
    });
  });
});

describe('Normal Game', function(){
  it('has a final score of 133', function(){
    scorecard = new Scorecard();

    scorecard.addFrameScore(1, 4); 
    scorecard.addFrameScore(4, 5);
    scorecard.addFrameScore(6, 4);
    scorecard.addFrameScore(5, 5);
    scorecard.addFrameScore(10, 0);
    scorecard.addFrameScore(0, 1);
    scorecard.addFrameScore(7, 3);
    scorecard.addFrameScore(6, 4);
    scorecard.addFrameScore(10, 0);
    scorecard.addFrameScore(2, 8, 6);

    expect(scorecard.showScore()).toEqual(133);
  });
});
