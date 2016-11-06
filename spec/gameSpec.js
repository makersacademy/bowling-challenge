describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('starts with a total score of zero', function() {
    expect(game.getTotalScore()).toEqual(0);
  });

  it('starts on frame zero', function() {
    expect(game.frame).toEqual(0);
  });

  it('adds a single bowl to the frame score', function() {
    game.bowl(6);
    expect(game.frameScore).toContain(6);
  });

});
