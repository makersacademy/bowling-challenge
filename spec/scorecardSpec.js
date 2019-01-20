describe ('ScoreCard', function(){
  let scoreCard;

  beforeEach(function() {
    scoreCard = new ScoreCard ;
  });

  describe ("Gutter Game", function(){
    it('the player should have a score of 0 at the end of a game of 20 frame where they did not knocked any pins', function(){
      for (let s = 0; s < 20; s++){
        scoreCard.roll(0)
      };
      expect(scoreCard.score()).toEqual(0);
  });
});
