describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game;
  });

  it('is created with 11 empty frames (10 regular, one bonus)', function() {
    expect(game.frames.length).toEqual(11);
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