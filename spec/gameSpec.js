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

  describe('frameset', function() {
    it('should add to scores table', function() {
      console.log = jasmine.createSpy("log");
      spyOn(game, "scoresRaw").and.returnValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
      game.frameSet();
      expect(console.log).toHaveBeenCalledWith('Finished!');
    });
  });

});
