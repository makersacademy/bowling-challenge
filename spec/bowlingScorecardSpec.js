describe("Bowling Game", function() {
  var game;

  beforeEach(function(){
    game = new Game();
  });

  it('The game is initialised with a frames array', function(){
    expect(game.frames()).not.toContain('word');
  });

  it('Adds the results of two rolls to a new_frame array', function(){
  game.newframe(1,4);
  expect(game.frames()).toContain([1,4]);
  });
});
