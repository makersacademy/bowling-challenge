describe('Bowling', function(){


  describe('A new bowling game has',function(){

    it('a total score of 0', function(){
      var game = new Bowling();
      expect(game.totalScore).toEqual(0);
    });

    it ('an empty hash object for a scorecard', function(){
      var game = new Bowling();
      var emptyHash = {};
      expect(game.scoreCard.show).toEqual(emptyHash);
    });
  });
});


