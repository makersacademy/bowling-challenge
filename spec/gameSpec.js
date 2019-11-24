describe ('Game', function() {

  beforeEach(function() {
    game = new Game();
  });

  describe ('Game types', function() {
    it('can roll a gutter game(all rolls = 0)', function() {
      for (var i = 0; i < 20; i++){
        game.roll(0);
      }
      expect(game.totalScore()).toEqual(0);
    });
  });

  describe('Roll types', function() {
    it('can roll a single frame', function() {
      game.roll(1);
      game.roll(4);
      expect(game.rolls).toEqual([1, 4])
    });
  });
});
