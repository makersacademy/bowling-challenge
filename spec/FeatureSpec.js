describe ('Feature Test', function(){
  let scoreCard;

  beforeEach(function() {
    scoreCard = new ScoreCard ;
  });

  describe('Gutter Game case', function(){
    it ('the player complete a game (20 rolls) and never knocked any pins during the party.His score should be 0', function(){
      scorecard.frame(10);
      scorecard.roll_1(0);
      scoreCard.roll_2(0);
      scoreCard.iscomplete();
      expect(scoreCard.score()).toEqual (0);
    });
  });




});
