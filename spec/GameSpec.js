describe('Game', function() {
  // var rolls = [];
  // var currentRoll = 0;

  beforeEach(function() {
    game = new Game();
  });

  it('allows you to add a score to a game', function() {
    game.roll(5);
    expect(game._totalGameScore()).toEqual(5);

  });

  it('gives you the total current score for the game without strikes', function() {
    game.roll(5);
    game.roll(9);
    expect(game._totalGameScore()).toEqual(14);

  });

  it('tells you the current roll', function() {
    game.roll(5);
    game.roll(9);
    game.roll(5);
    game.roll(9);
    game.roll(5);
    expect(game.currentGameRoll()).toEqual(5);

  });

  it('tells you the current frame', function() {
    game.roll(5);
    game.roll(9);
    game.roll(5);
    game.roll(9);
    game.roll(5);
    expect(game.currentGameFrame()).toEqual(3);
  });

  it('adds the bonus for a strike at the end of the following frame', function() {
    game.roll(10);
    game.roll(0);
    game.roll(8);
    game.roll(1);
    expect(game._totalGameScore()).toEqual(28);
  });

  it('gives the score for a spare in the first frame when no other rolls have occured', function() {
    game.roll(5);
    game.roll(5);
    expect(game._totalGameScore()).toEqual(10);
  });

  it('adds the bonus for a spare in first frame', function() {
    game.roll(5);
    game.roll(5);
    game.roll(5);
    game.roll(1);
    expect(game._totalGameScore()).toEqual(21);
  });

  it('adds the bonus for a strike followed by a spare', function() {
    game.roll(10);
    game.roll(0);
    game.roll(5);
    game.roll(5);
    game.roll(5);
    game.roll(1);
    expect(game._totalGameScore()).toEqual(41);
  });

  it('does not add a strike bonus if 10 is scored in the second roll of a frame', function() {
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(10);
    game.roll(1);
    game.roll(1);
    expect(game._totalGameScore()).toEqual(13);
  });

  it('adds the bonus for two stikes in a row', function() {
    game.roll(10);
    game.roll(0);
    game.roll(10);
    game.roll(0);
    game.roll(1);
    game.roll(1);
    expect(game._totalGameScore()).toEqual(44);
  });

  it('adds the bonus for three stikes in a row', function() {
    game.roll(10);
    game.roll(0);
    game.roll(10);
    game.roll(0);
    game.roll(10);
    game.roll(0);
    game.roll(1);
    game.roll(1);
    expect(game._totalGameScore()).toEqual(74);
  });

  it('adds the bonus for a spare at the end of the following frame', function() {
    game.roll(2);
    game.roll(8);
    game.roll(8);
    game.roll(1);
    expect(game._totalGameScore()).toEqual(27);
  });

  it('calculates the a game up to the last frame with perfect scores', function() {
    game.roll(10);
    game.roll(0);
    game.roll(10);
    game.roll(0);
    game.roll(10);
    game.roll(0);
    game.roll(10);
    game.roll(0);
    game.roll(10);
    game.roll(0);
    game.roll(10);
    game.roll(0);
    game.roll(10);
    game.roll(0);
    game.roll(10);
    game.roll(0);
    game.roll(10);
    game.roll(0);
    game.roll(10);
    game.roll(0);
    expect(game._totalGameScore()).toEqual(280);
  });

  it('calculates the perfect game', function() {
    game.roll(10);
    game.roll(0);
    game.roll(10);
    game.roll(0);
    game.roll(10);
    game.roll(0);
    game.roll(10);
    game.roll(0);
    game.roll(10);
    game.roll(0);
    game.roll(10);
    game.roll(0);
    game.roll(10);
    game.roll(0);
    game.roll(10);
    game.roll(0);
    game.roll(10);
    game.roll(0);
    game.roll(10);
    game.roll(0);
    game._lastRoll(10);
    game._lastRoll(10);
    expect(game._grandTotal()).toEqual(300);
  });

});
