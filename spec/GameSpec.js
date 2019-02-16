describe('Game', function() {
  var game;
  beforeEach(function(){
    game = new Game();
  });
  it('has no frames by default', function() {
    expect(game._frames).toEqual([]);
  });
  describe('addFrame', function() {
    it('adds a frame', function() {
      game.addFrame('frame');
      expect(game._frames).toEqual(['frame']);
    })
  })
})