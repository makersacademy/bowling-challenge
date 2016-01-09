describe('Integration Tests', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('A frame should successfully log to score and frames', function() {
    game.logRoll(4);
    game.logRoll(5);
    expect(game.getScore()).toEqual(9);
    expect(game.getFrame(1)).toEqual({rolls: [4, 5], total: 9});
  });

});
