describe ('ScoreCard', function(){
  let scoreCard;

  beforeEach(function() {
    scoreCard = new ScoreCard ;
  });

  describe ("Gutter Game", function(){
    it('the player should have a score of 0 at the end of a game of 20 frame where they did not knocked any pins', function(){
      for (let s = 0; s < 20; s++){
        scoreCard.roll(0)};
      expect(scoreCard.score()).toEqual(0);
    });
  });

  describe ("Accumulating point", function(){
    it('the player can score an amount of 5 points', function(){
      for (let s = 0; s < 20; s++){
        scoreCard.roll(1)};
      expect(scoreCard.score()).toEqual(5);
    });
    it('the player can play 1 frame of 2 rolls and accumulate their points', function(){
      scoreCard.roll(2);
      scoreCard.roll(4);
      for (let s = 0; s < 18; s++){
        scoreCard.roll(0)};
      expect(scoreCard.score()).toEqual(6);
    });
  });

});
