describe('ScoreCard', function(){

  it('#getScore', function(){
    var scoreCard = new ScoreCard(); 
    expect(scoreCard.getScore()).toBe(0);
  });

  it('#addScore', function(){
  
     var scoreCard = new ScoreCard();
     scoreCard.addScore(8);
     scoreCard.addScore(9);
     expect(scoreCard.getScore()).toBe(17);
  });

});
