describe('Game', function() {
  var game;
  beforeEach(function(){
    game = new Game();
  });
  it('has no frames by default', function() {
    expect(game.frames).to Equal([]);
  });

})