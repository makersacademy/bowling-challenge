describe("Game", function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  describe("frames", function(){

    it("starts on frame 1", function(){
      expect(game.turn).toEqual(1);
    });

    it("still the same frame after 1 bowl", function(){
      game.bowl();
      expect(game.turn).toEqual(1);
    });

    it("changes frame after 2 bowls", function(){
      game.bowl();
      game.bowl();
      expect(game.turn).toEqual(2);
    });
  });

  describe("pins", function(){
    it("frame starts with 10 pins", function(){
      expect(game.pins).toEqual(10);
    });

    it("a bowl knocks down pins", function(){
      spyOn(game, "_getRandomInt").and.returnValue(4);
      game.bowl();
      expect(game.pins).toEqual(6);
    });
  });

});