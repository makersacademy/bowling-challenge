describe('BowlingGame', function (){

  describe('The Player can ', function(){
    it('roll', function() {
      game = new BowlingGame();
      expect(game.roll()).toBe(true);
    });

    it('score when hits pins', function() {
      game = new BowlingGame();
      expect(game.score()).toEqual(5);
    });

    it('see the final score', function(){
      game = new BowlingGame();
      expect(game.finalScore()).toEqual(130);
    });
  });

});
