describe('Bowling', function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });


describe('Start a new game', function(){
  it('starts a game with a frame and turn', function(){
    game.startGame();
    expect(game.currentGame()).toEqual({frame: 1, round: 1, score: null})
  });
});

});
