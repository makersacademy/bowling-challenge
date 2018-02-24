describe('Game', function() {
  var game;
  var bowlingFrame;

  beforeEach(function() {
    game = new Game();
    bowlingFrame = {
      total: function() {
        return 8;
      }
    };
  });

  describe('.readScore', function() {
    it('gets the total score from the targeted frame', function() {
      expect(game.readScore(bowlingFrame)).toBe(8);
    });
  });
});
