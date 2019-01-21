describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it( "starts with framenumber zero", function() {
    expect(game.framenumber()).toBe(0)
  });

  describe('add_frame', function() {

    beforeEach(function() {
      game.add_frame();
    });

    it ("changes framenumber to 1", function() {
      expect(game.framenumber()).toBe(1);
    });

    it ("adds frame to frame list", function() {
      expect(game.framelist()[0].framenumber).toBe(0)
    });
  });

});
