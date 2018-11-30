describe('BowlingScorecard', function(){
  var scorecard;
  beforeEach(function(){
    scorecard = new BowlingScorecard();
    scorecard.enterPlayer('Matt');
  });
  it('tallies up framescore after second bowl', function(){
    scorecard.enterBowl(5);
    scorecard.enterBowl(4);
    expect(scorecard.scores.frame1['frameScore']).toEqual(9);
  });
  describe('strike is bowled', function(){
    beforeEach(function(){
      scorecard.enterBowl(10);
    });
    it('only records one bowl for frame1 is a strike is bowled',function(){
      scorecard.enterBowl(5);
      expect(scorecard.scores.frame1['bowl2']).not.toBeDefined();
      expect(scorecard.scores.frame2['bowl1']).toEqual(5);
    });
    it('adds the next 2 bowls to the frame score', function(){
      scorecard.enterBowl(4);
      scorecard.enterBowl(5);
      expect(scorecard.scores.frame1['frameScore']).toEqual(19);
    });
    it('can add 2 bowls to frameScore if the second bowl is a strike', function(){
      scorecard.enterBowl(10);
      scorecard.enterBowl(5);
      expect(scorecard.scores.frame1['frameScore']).toEqual(25);
    });
    it('can add 2 bowls to frameScore if bowl 3 strikes in a row', function(){
      scorecard.enterBowl(10);
      scorecard.enterBowl(10);
      expect(scorecard.scores.frame1['frameScore']).toEqual(30);
    });
  });
  describe('spare is bowled', function(){
    beforeEach(function(){
      scorecard.enterBowl(9);
      scorecard.enterBowl(1);
    });
    it('adds the next bowl to the frameScore', function(){
      scorecard.enterBowl(4);
      console.log(scorecard.scores);
      expect(scorecard.scores.frame1['frameScore']).toEqual(14);
    });
  });
});
