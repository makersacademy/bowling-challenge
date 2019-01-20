describe ('ScoreCard', function(){
  let scoreCard;

  beforeEach(function() {
    scoreCard = new ScoreCard ;
  });

  describe ("Gutter Game", function(){
    it('the player should have a complete score card because he played his 10 frames', function(){
      scoreCard.frame(10);
      expect(scoreCard.iscomplete()).toBeTruthy ();
    });
    it ('the player should have enter the number of pins he have knocked of his 1st roll of his last frame. In our case it will be roll 1 (frame10), pins 0', function(){
      expect(scoreCard.roll_1(0)).toHaveBeenCalled();
    });
    it ('the player should have enter the number of pins he have knocked of his 2nd roll of his last frame. In our case it will be roll 2 (frame10), pins 0', function(){
      expect(scoreCard.roll_2(0)).toHaveBeenCalled();
    });

    it('the player should have a score of 0', function(){
      scoreCard.frame(10);
      scoreCard.roll_1(0);
      scoreCard.roll_2(0);
      expect(scoreCard.score()).toEqual (0);
    });

  });


});
