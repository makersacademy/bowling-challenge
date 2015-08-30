describe ('', function(){

  beforeEach(function(){
    game = new BowlingGame();
    // frame = new BowlingFrame(1);
  });

  it('can create a new game', function(){
    expect(game.newGame).toBeDefined();
  });
});
