describe('Game', function() {

  describe('roll a ball', function() {

    beforeEach(function() {
      game = new Game();
    });

    it('player can roll a gutter ball', function() {
      game.roll(0)
      expect(game.rollScore).toEqual([0]);
    });

    it('player can roll a ball and score 1', function() {
      game.roll(1)
      expect(game.rollScore).toEqual([1]);
    });

    it('player can roll 2 balls and score 2', function() {
      game.roll(1)
      game.roll(1)
      expect(game.rollScore).toEqual([1, 1])
    });

    it('can see the score for the frame', function() {
      game.roll(1)
      game.roll(1)
      total = game.frameScore();
      expect(total).toEqual(2);
    });

    xit('can play a full game scoring 0 points', function () {
      for (i = 0; i < 20; i++) {
        game.roll(1);
      };
      total = game.frameScore();
      expect(total).toEqual(20);
    });

  });

});
