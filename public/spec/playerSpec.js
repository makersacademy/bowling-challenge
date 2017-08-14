describe('Player', function() {
  var player;
  beforeEach(function() {
    player = new Player;
  });

  describe('#bowl', function() {
    it('produces a random score between 0-10', function() {
      expect(player.bowl()).toBeGreaterThan(-1)
      expect(player.bowl()).toBeLessThan(11)
    });
  });
});
