describe('game logic', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  function gameRoll(n, pins) {
    for (var i = 0; i < n; i++) {
      game.roll(pins);
    };
  };

  it('tracks the current roll', function() {
    gameRoll(2, 3);
    expect(game.currentRoll).toEqual(2);
  });

  it('tracks frame', function() {
    gameRoll(3, 3);
    expect(game.currentFrame).toEqual(2);
  });

  it('stores all rolls', function() {
    gameRoll(2, 3);
    expect(game.allRolls.length).toEqual(2);
    expect(game.allRolls).toEqual([3, 3])
  });

  it('places roll into frame', function() {
    gameRoll(2, 3);
    expect(game.allFrame).toEqual({
      1: [3, 3]
    });
  });

  it('stores mulptiple frame for score', function() {
    gameRoll(3, 3);
    expect(game.allFrame).toEqual({
      1: [3, 3],
      2: [3]
    });
  });

  it('calculates the score of current frame', function() {
    gameRoll(2, 3);
    expect(game.frameScore(game.currentFrame)).toEqual(6);
  });

  it('recognises spare', function() {
    gameRoll(2, 5);
    expect(game.isSpare(game.currentFrame)).toEqual(true);
  });

  it('recognises non spare', function() {
    gameRoll(2, 4);
    expect(game.isSpare(game.currentFrame)).toEqual(false);
  });

  it('recognises a strike', function() {
    gameRoll(1, 10);
    expect(game.isStrike(game.currentFrame)).toEqual(true);
  });

  it('add spare bonus', function() {
    gameRoll(2, 5);
    gameRoll(1, 3);
    gameRoll(17, 0)
    expect(game.score()).toEqual(16);
  });

  it('gutter game', function() {
    gameRoll(20, 0);
    expect(game.score()).toEqual(0);
  });

  it('normal game with no spares or strikes', function() {
    gameRoll(20, 1);
    expect(game.score()).toEqual(20);
  });

  it('handles a strike', function() {
    gameRoll(1, 10);
    gameRoll(2, 3);
    gameRoll(16, 0);
    expect(game.score()).toEqual(22);
  });

  it('handles multiple strikes', function() {
    gameRoll(3, 10);
    gameRoll(14, 0);
    expect(game.score()).toEqual(60);
  });

  it('handles perfect game', function() {
    gameRoll(12,10);
    expect(game.score()).toEqual(300);
  });

  it('handles spare followed by strike', function() {
    gameRoll(2,5);
    gameRoll(1,10);
    gameRoll(16,0);
    expect(game.score()).toEqual(30);
  });

  it('handles strike followed by spare', function() {
    gameRoll(1,10);
    gameRoll(2,5);
    gameRoll(16,0);
    expect(game.score()).toEqual(30);
  });

});
