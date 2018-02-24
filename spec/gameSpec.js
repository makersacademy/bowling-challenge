describe('Game', function() {
  var game;
  var bowlingFrame;

  beforeEach(function() {
    bowlingFrame = {
      total: function() {
        return 8;
      }
    };
    game = new Game(bowlingFrame);
  });

  describe('.readScore', function() {
    it('gets the total score from the targeted frame', function() {
      expect(game.readScore(bowlingFrame)).toBe(8);
    });
  });
});
