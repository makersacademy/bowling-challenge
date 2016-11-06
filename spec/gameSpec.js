describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('starts with a total score of zero', function() {
    expect(game.getTotalScore()).toEqual(0);
  });

  it('starts a new frame after two rolls', function() {
    game.recordRoll(5);
    game.recordRoll(4);
    expect(game.frame.rolls).toEqual([]);
    expect(game.frameRolls[0]).toEqual([5,4]);
  });

});
