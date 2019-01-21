describe ('ScoreCard', function(){
  let scoreCard;

  beforeEach(function() {
    scoreCard = new ScoreCard();
  });

  describe ("Gutter Game", function(){
    it('the player should have a score of 0 at the end of a game of 20 frame where they did not knocked any pins', function(){
      for (let s = 0; s < 20; s++){
        scoreCard.roll(0)};
      expect(scoreCard.score()).toEqual(0);
    });
  });

  describe ("Accumulating point", function(){
    it('the player can score an amount of 20 points', function(){
      for (let s = 0; s < 20; s++){
        scoreCard.roll(1)};
      expect(scoreCard.score()).toEqual(20);
    });

    it('the player can play 1 frame of 2 rolls and accumulate their points', function(){
      scoreCard.roll(2);
      scoreCard.roll(4);
      for (let s = 0; s < 18; s++){
        scoreCard.roll(0)};
      expect(scoreCard.score()).toEqual(6);
    });
  });

  describe("spare", function(){
    it('the player score a bonus when do a spare = 10 pins knocked in 2 rolls of the same frame', function(){
      scoreCard.roll(4);
      scoreCard.roll(6);
      scoreCard.roll(3);
      for (let s = 0; s < 18; s++){
        scoreCard.roll(0)};
      expect(scoreCard.score()).toEqual(16);
    });
  });

  describe("strike", function(){
    it('the player score a bonus when do a strike = 10 pins knocked in the 1st roll of a frame', function(){
      scoreCard.roll(10);
      scoreCard.roll(2);
      scoreCard.roll(3);
      for (let s = 0; s < 18; s++){
        scoreCard.roll(0)};
      expect(scoreCard.score()).toEqual(20);
    });
  });



});
