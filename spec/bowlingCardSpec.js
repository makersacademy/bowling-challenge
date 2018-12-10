describe('Bowling Card', function(){
  var bowlingCard;
  beforeEach(function(){
    bowlingCard = new BowlingCard();
  });
  it('can enter score', function(){
    bowlingCard.enterScore(5);
    expect(bowlingCard.scores[0]).toEqual(5);
  });
  it('records a zero after a strike', function(){
    bowlingCard.enterScore(10);
    expect(bowlingCard.scores[0]).toEqual(10);
    expect(bowlingCard.scores[1]).toEqual(0);
  });
  describe('number of scores taken', function(){
    it('takes 20 scores, with elements 18 & 19 < 10',function(){
      for(var i = 0;i<20;i++){
        bowlingCard.enterScore(4);
      }
      bowlingCard.enterScore(4);
      expect(bowlingCard.scores.length).toEqual(20);
    });
    it('takes 21 scores, with elements 18 & 19 >= 10',function(){
      for(var i = 0;i<20;i++){
        bowlingCard.enterScore(5);
      }
      bowlingCard.enterScore(4);
      expect(bowlingCard.scores.length).toEqual(21);
    });
  });
  describe('frameScores', function(){
    it('calculates frame scores after each frame', function(){
      bowlingCard.enterScore(3);
      bowlingCard.enterScore(5);
      expect(bowlingCard.frameScores[0]).toEqual(8);
    });
    it('adds next roll after a spare', function(){
      bowlingCard.enterScore(5);
      bowlingCard.enterScore(5);
      bowlingCard.enterScore(3);
      expect(bowlingCard.frameScores[0]).toEqual(13);
    });
    it('calculates 3 strikes in a row', function(){
      bowlingCard.enterScore(10);
      bowlingCard.enterScore(10);
      bowlingCard.enterScore(10);
      expect(bowlingCard.frameScores[0]).toEqual(30);
    });
  });
});
