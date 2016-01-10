describe ('FEATURE TEST : End of Game', function () {

  var game;
  beforeEach(function() {
    game = new Game();
  });

  it('prevents play and lets you know when the tenth frame is over', function(){
    for (n=0; n<20; n++) {
      game.bowlA(4);
    }
    expect(game.bowlA(4)).toEqual('Game over: Ten frames played')
  });



});
