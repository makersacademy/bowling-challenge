
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
      game.roll(0)
      expect(game.score()).toEqual(0);
    });
  });
});
