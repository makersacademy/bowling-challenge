describe('Game', function(){
  var game;

  beforeEach(function(){
    game = new Game();
    frame = new Frame();
  });

  it('A game starts in round 1', function(){
    expect(game.getFrameNumber()).toEqual(1);
  });

  // describe('Play Game', function(){
  //
  // });
  //
  //
  // it('After a frame finishes, the frame number goes up by 1', function() {
  //
  //
  // });
  // it('After frame 10 finishes, the game of bowling finishes', function() {
  //
  // });

});
