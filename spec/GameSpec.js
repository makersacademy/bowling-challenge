describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game;
  });

  it('is created with 10 empty frames', function() {
    expect(game.frames.length).toEqual(10);
  });

  it('scores a gutter game', function() {
    game.frames = [
      [0],[0],
      [0],[0],
      [0],[0],
      [0],[0],
      [0],[0],
      [0],[0],
      [0],[0],
      [0],[0],
      [0],[0],
      [0],[0]
    ]
    expect(game.score).toEqual(0);
  });

});