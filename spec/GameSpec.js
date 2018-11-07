describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('starts a game at frame 1', function() {
    expect(game.frame).toEqual(1);
  });

  it('starts a game at bowl 1', function() {
    expect(game.currentBowl).toEqual(1);
  });

  it('has 10 pins for each frame', function() {
    expect(game.framePins).toEqual(10);
  });

  describe('bowl', function() {
    it('decreses the framePins from number of pins', function() {
      game.bowl(3);
      expect(game.framePins).toEqual(7);
    });

});
