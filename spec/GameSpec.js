describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game;
  });

  it('can add a frame to a game', function() {
    game.addFrame(3,3);
    game.scoreGame();
    expect(game.frames.length).toEqual(1);
  });

  it('adds the score for the next roll for a spare', function() {
    game.addFrame(5,5); // spare
    game.addFrame(3,0);
    game.scoreGame();
    expect(game.score).toEqual(16);
  });

  it('adds the score for the next two rolls for a strike', function() {
    game.addFrame(10,0); // strike (10) + 3 + 4 = 17
    game.addFrame(3,4); // 7, total = 24
    game.scoreGame();
    expect(game.score).toEqual(24);
  });

  it('scores a gutter game (no points scored at all) as zero', function() {
    for(var i = 0; i <= 9; i++) {
      game.addFrame(0,0);
    }
    game.scoreGame();
    expect(game.gutterGame).toBe(true);
    expect(game.frames.length).toEqual(10);
    expect(game.score).toEqual(0);
  });

  it('scores 300 points for a perfect game (10 strikes, plus 2 bonus strikes)', function() {
    for(var i = 0; i <= 9; i++) {
      game.addFrame(10,0);
    }
    console.log(game.frames);
    game.scoreGame();
    expect(game.frames.length).toEqual(10);
    expect(game.score).toEqual(300);
  });

});