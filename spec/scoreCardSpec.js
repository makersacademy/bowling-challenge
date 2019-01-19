describe('ScoreCard', function(){

  it('Feature - Gutter Game', function(){
    scorecard = new ScoreCard();
    expect(scorecard.totalscore()).toEqual(0);
  });
})