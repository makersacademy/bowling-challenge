describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game;
    bowl = new Bowl;
  });

  describe('turn', function() {
    it('should return a value after turn', function() {
      spyOn(window, "prompt").and.returnValue("11");
      expect(game.turn(bowl)).toBeDefined();
    });
  });



});
