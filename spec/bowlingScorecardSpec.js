describe("Bowling Game", function() {
  var game;

  beforeEach(function(){
    game = new Game();
  });

  it('The game is initialised with a frames array', function(){
    expect(game.frames()).not.toContain('word');
  });
});
