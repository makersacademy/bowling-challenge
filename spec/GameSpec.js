describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game;
  });

  it('is created with 10 empty frames', function() {
    expect(game.frames.length).toEqual(10);
  });

});