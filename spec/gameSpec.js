describe('Game', function(){
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('begins with frame number one', function() {
    expect(game.frameNumber).toEqual(1);
  });
});
