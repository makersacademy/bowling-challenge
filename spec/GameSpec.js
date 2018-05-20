describe("Game", function(){
  var game;
  beforeEach(function(){
    game = new Game;
  });

  it('creates a new frame when you bowl first ball', function(){
    game.bowl(5);
    expect(game.frames[0].rollScores[0]).toEqual(5);
  });

});
