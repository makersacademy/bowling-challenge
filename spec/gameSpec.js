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
    addNineFrames(3, 5);
    expect(game.frames.length).toEqual(9);
  });

  it('can add the final frame', function (){
    addNineFrames(3, 5);
    game.addFinalFrame(4, 4);
    expect(game.frames[9].rolls).toContain(4, 4);
    expect(game.frames.length).toEqual(10);
  });

  function addNineFrames(firstroll, secondroll) {
    i = 0;
    do {
        game.addFrame(firstroll, secondroll);
        i++;
    }
    while (i < 10 );
  }
});
