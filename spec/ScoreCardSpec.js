describe('ScoreCard', function(){
  var scorecard;
  beforeEach(function(){
    scorecard = new ScoreCard();
  });

  it('Should record the score', function(){
    scorecard.bowl(3);
    scorecard.bowl(4);
    expect(scorecard.score).toEqual(7);
  });

  it('Have two bowls per frame', function(){
    scorecard.bowl(3);
    expect(scorecard.frame).toEqual(1);
    expect(scorecard.throw).toEqual(2);
    scorecard.bowl(4);
    expect(scorecard.frame).toEqual(2);
    expect(scorecard.throw).toEqual(1);
  });

  it('End frame on strike bonus', function(){
    expect(scorecard.throw).toEqual(1);
    scorecard.bowl(10);
    expect(scorecard.throw).toEqual(1);
  });

  it('Bonus for next roll after spare', function(){
    scorecard.bowl(10);
    scorecard.bowl(2);
    scorecard.bowl(1);
    expect(scorecard.score).toEqual(15);
  });

  it('Bonus for next two rolls after strike', function(){
    
  });

});
