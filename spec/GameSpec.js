describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game;
  });

  it('can add a frame to a game', function() {
    game.addFrame(3,3);
    expect(game.frames.length).toEqual(1);
  });

  it('scores a gutter game (no points scored at all) as zero', function() {
    for(var i = 0; i <= 9; i++) {
      game.addFrame(0,0);
    }
    expect(game.frames.length).toEqual(10);
    expect(game.score).toEqual(0);
  });

});