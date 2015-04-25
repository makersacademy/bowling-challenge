describe('Calculates a bowling score', function () {
  var game;

  beforeEach(function () {
    game = new Game;
  });

  it('starting at 0', function () {
    expect(game.totalScore).toBe(0);
  });

  it('adds number of pins knocked down to the score', function () {
    game.roll(4);
    expect(game.totalScore).toBe(4);
  });

  it('starts at frame 0', function () {
    expect(game.frame).toBe(0);
  });

  it('moves to second frame after two low scoring rolls', function () {
    game.roll(1);
    game.roll(1);
    expect(game.frame).toBe(1);
  });

  it('moves to third frame after four low scoring rolls', function () {
    game.roll(1);
    game.roll(1);
    game.roll(1);
    game.roll(1);
    expect(game.frame).toBe(2);
  });

  it('moves to second frame after a strike', function () {
    game.roll(10);
    expect(game.frame).toBe(1);
  });

  it('returns to first ball after a strike', function () {
    game.roll(10);
    expect(game.ball).toBe(0);
  });

  it('remembers all scores', function () {
    game.roll(3);
    game.roll(5);
    game.roll(2);
    game.roll(3);
    expect(game.scores[0][0]).toBe(3);
    expect(game.scores[0][1]).toBe(5);
    expect(game.scores[1][0]).toBe(2);
    expect(game.scores[1][1]).toBe(3);
  });

  it('adds bonus from next ball after strike', function () {
    game.roll(10);
    game.roll(4);
    expect(game.totalScore).toBe(18);
  });

  it('adds bonus from next balls after strike', function () {
    game.roll(10);
    game.roll(4);
    game.roll(3);
    expect(game.totalScore).toBe(24);
  });

});