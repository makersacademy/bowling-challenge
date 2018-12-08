describe('Game', function() {
  var game;

  beforeEach(function(){
    game = new Game();
  });

  it('can add a frame to a game', function() {
    game.addFrame(3, 5);
    expect(game.frames.length).toEqual(1);
  });

  it('sets the maximum number of normal frames to 9', function () {
    var i = 0;
    do {
        game.addFrame(3, 5);
        i++;
    }
    while (i < 10 );
    expect(game.frames.length).toEqual(9);
  });
});
