describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('starts a new game', function(){
      expect(game).toEqual(game)
  });
  it('is empty before game starts', function(){
      expect(game.frames).toEqual([]);
  });
});
