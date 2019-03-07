describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game;
  });

  it('scores a gutter game (no points scored at all) as zero', function() {
    for(var i = 0; i <= 9; i++) {
      game.addFrame(0,0);
    }
    expect(game.frames.length).toEqual(10);
    expect(game.score).toEqual(0);
  });

});