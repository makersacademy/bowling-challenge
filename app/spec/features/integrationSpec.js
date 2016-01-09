describe('Integration Tests', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('A frame should successfully log to score and frames', function() {
    game.logRoll(4);
    game.logRoll(5);
    expect(game.getScore()).toEqual(9);
    expect(game.getFrame(1)).toEqual({rolls: [4, 5], total: 9, bonus: 0});
  });

  it('A spare should be correctly modified by the next game', function() {
    game.logRoll(5);
    game.logRoll(5);
    expect(game.getFrame(1).bonus).toEqual(1);
    game.logRoll(6);
    game.logRoll(3);
    expect(game.getScore()).toEqual(25);
    expect(game.getFrame(1).bonus).toEqual(0);
    expect(game.getFrame(1).total).toEqual(16);
  });

  it('Strikes should be correctly modified by the next 2 rolls', function() {
    game.logRoll(10);
    expect(game.getFrame(1).bonus).toEqual(2);
    game.logRoll(6);
    game.logRoll(3);
    expect(game.getScore()).toEqual(28);
    expect(game.getFrame(1).bonus).toEqual(0);
    expect(game.getFrame(1).total).toEqual(19);
  });
});
