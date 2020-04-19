describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('Gutter game returns 0', function() {
    expect(game.score([00, 00, 00, 00, 00, 00, 00, 00, 00, 00])).toEqual(0);
  });
  
});
