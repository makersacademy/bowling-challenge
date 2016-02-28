describe ('Game', function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  it('starts with no frames', function(){
    expect(game.frame).toEqual([]);
  });

  it('increases the score when a roll is thrown', function(){
    game.firstRoll();
    expect(game.frame).toBeGreaterThan([0]);
  });

});
