describe('Game features', function() {

  var game;
  beforeEach(function () {
    game = new Game();
  });

  it('Adds a new frame to the frames array ', function (){
    game.addFrame(new Frame);
    expect(game.frames.length).toEqual(1);
  })

  it('Creates a full frames array', function (){
    game.fullFrame(new Frame);
    expect(game.frames.length).toEqual(10);
  })

  it('Updates the scores of the game', function (){
    game.fullFrame(new Frame);
    game.updateGameScores();
    expect(game.scores).toEqual([[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]])
  })
})
