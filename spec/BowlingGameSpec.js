
describe("BowlingGame",function() {
  "use strict"
  var game;

  describe('on new game, ',function(){
    it('score is 0',function() {
      game = new BowlingGame();
      expect(game.score()).toEqual(0);
    });
  });

  describe('roll function, ',function(){
    it('with 0 rolls, score is zero',function(){
      game = new BowlingGame();
      for (var i=0; i<20; i++) {
        game.roll(0)
      }
      expect(game.score()).toEqual(0);
    });

    it('with rolls of 1, score is 20',function(){
      for (var i=0; i<20; i++) {
        game.roll(1);
      }
      expect(game.score()).toEqual(20);
    });

  });
});
