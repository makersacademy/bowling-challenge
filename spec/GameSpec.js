describe("Game:", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("Scoring", function() {

    it('score initializes as an empty array', function() {
      expect(game.score).toEqual([]);
    });

    it('rolls are added to the score array', function() {
      game.roll(4)
      game.roll(8)
      game.roll(2)
      game.roll(0)
      expect(game.score).toEqual([4, 8, 2, 0]);
    });

  });

});
