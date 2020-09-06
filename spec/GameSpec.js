describe('Game', function(){
  
  let game;

  beforeEach(function() {
    game = new Game();
  });

  it('starts on the first frame', function() {
    expect(game.frameCount).toEqual(1);
  });
  
});