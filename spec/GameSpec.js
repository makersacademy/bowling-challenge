describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('contains and array of frames', function() {
    expect(game._frames).toEqual([]);
  });
});
