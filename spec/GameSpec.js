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
});
