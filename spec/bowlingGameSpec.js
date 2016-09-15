describe('Bowling Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('accepts score from the player', function() {
    game.frameBowls(1,2);
    expect(game._score[0]).toEqual([1,2]);
  });

  it('advances the frame after accepting the bowls', function() {
    game.frameBowls(1,2);
    expect(game._frame).toEqual(2);
  });

  it('calculates the score', function() {
    game.frameBowls(1,2);
    game.frameBowls(3,4);
    expect(game.score()).toEqual(10);
  });

  it('knows if a frame is a spare', function() {
    expect(isSpare([5,5])).toBe(true);
  });

  it('correctly calculates a spare', function() {
    game.frameBowls(5,5);
    game.frameBowls(5,4);
    expect(game.score()).toEqual(24);
  });

  it('knows if a frame is a strike', function() {
    expect(isStrike([10,0])).toBe(true);
  });

  it('correctly calculates a strike', function() {
    game.frameBowls(10,0);
    game.frameBowls(5,5);
    expect(game.score()).toEqual(30);
  });

  it('correctly calculates a perfect game', function() {
    for (var i = 0; i < 9; i++) {
      game.frameBowls(10,0)
    };
    game.frameBowls(10,10,10)
    expect(game.score()).toEqual(300);
  });

});
