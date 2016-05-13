
describe("BowlingGame",function() {
  "use strict"
  var game;

  describe('knows when a number is',function(){
    it('divisible by 3',function() {
      game = new BowlingGame();
      expect(game.isDivisibleByThree(3)).toBe(true);
    });

    it('divisible by 5',function(){
      game = new BowlingGame();
      expect(game.isDivisibleByFive(5)).toBe(true);
    });

    it('divisible by 15',function(){
      game = new BowlingGame();
      expect(game.isDivisibleByFifteen(15)).toBe(true);
    });

  });

  describe('knows when a number is NOT',function(){
    it('divisible by 3',function(){
      game = new BowlingGame();
      expect(game.isDivisibleByThree(4)).toBe(false);
    });

    it('divisible by 5',function(){
      game = new BowlingGame();
      expect(game.isDivisibleByFive(6)).toBe(false);
    });

    it('divisible by 15',function(){
      game = new BowlingGame();
      expect(game.isDivisibleByFifteen(26)).toBe(false);
    });
  });
});
