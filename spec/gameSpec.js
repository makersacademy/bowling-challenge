describe ('Game', function(){
  var game;
  
  beforeEach(function() {
    game = new Game();
  });

  it ('starts a new game when created', function(){
    expect(game.returnScore()).toEqual(0);
  });
});
