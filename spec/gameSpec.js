describe('Game', function () {
  var game;
  var frame;

  beforeEach(function () {
    game = new Game(Frame);

    // TODO: mock frame
  });

  describe('#roll', function () {
    it('calls roll for the current turn', function () {
      game.roll();
      expect(frame.roll).toHaveBeenCalled();
    });
  });
});
