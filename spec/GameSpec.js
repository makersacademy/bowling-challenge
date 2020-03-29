describe('Bowling Game', function(){
  var game;

  beforeEach(function(){
    game = new BowlingGame();
  });

  describe('the diferent scenarios', function(){
    it('Scores 0 points in a gutter game, 20 rolls with 0 pins down', function(){
      for (let i=20; i < 20; i++) {
        game.play(0);
      }
      expect(game.score()).toEqual(0);
    });
  });

});
