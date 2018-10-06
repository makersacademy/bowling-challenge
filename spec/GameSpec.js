describe('Bowling', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("Score", function() {
    describe("should be able to call score at any time", function() {
      it("after one roll", function() {
        game.roll(5);
        expect(game.score()).toEqual(5);
      });

      it("after a strike", function() {
        game.roll(10);
        expect(game.score()).toEqual(10);
      });

      it("after a spare", function() {
        game.roll(5);
        game.roll(5);
        expect(game.score()).toEqual(10);
      });
    });
  });

  describe("Gutter game", function() {
    it("all rolls are 0,should score 0", function() {
      for (var i = 0; i < 20; i++) {
        game.roll(0);
      }
      expect(game.score()).toEqual(0);
    });
  });

  describe("Score if all rolls hit only 1 pin", function() {
    it("should score 20", function() {
      for (var i = 0; i <20; i++) {
        game.roll(1);
      }
      expect(game.score()).toEqual(20);
    });
  });
});
