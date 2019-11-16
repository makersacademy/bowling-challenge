describe('Game', function() {

  describe('roll a ball', function() {

    beforeEach(function() {
      game = new Game();
    });

    it('player can roll a gutter ball', function() {
      game.bowl(0)
      expect(game.bowls).toEqual([0]);
    });

    it('player can roll a ball and score 1', function() {
      game.bowl(1)
      expect(game.bowls).toEqual([1]);
    });

    it('player can roll 2 balls and score 2', function() {
      game.bowl(1)
      game.bowl(1)
      expect(game.bowls).toEqual([1, 1])
    });

    it('can see the score for the frame', function() {
      game.bowl(1)
      game.bowl(1)
      total = game.score();
      expect(total).toEqual(2);
    });

    it('can play a full game scoring 0 points', function () {
      for (i = 0; i < 20; i++) {
        game.bowl(0);
      };
      total = game.score();
      expect(total).toEqual(0);
    });

    it('can play a full game scoring 20 points', function() {
      for (i = 0; i < 20; i++) {
        game.bowl(1);
      };
      total = game.score();
      expect(total).toEqual(20);
    });

    it('can play half a game', function() {
      game.bowl(1);
      game.bowl(1);
      total = game.score();
      expect(total).toEqual(2);
    });

  });

});
