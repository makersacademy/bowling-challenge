describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  var rollOne = 1;
  var rollTwo = 9;
  var frame = [rollOne, rollTwo];

  describe('Scorecard', function() {

    it('is empty at the beggining of the game', function() {
      expect(game.scoreCard).toEqual([]);
    });

    it('stores the rolls in frames', function() {
      game.addFrame(frame);
      expect(game.scoreCard).toEqual([[rollOne, rollTwo]]);
    });
  });

});
