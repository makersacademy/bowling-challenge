describe('game logic', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  function gameRoll (n, pins) {
    for (var i = 0; i < n; i++) {
      game.roll(pins);
    };
  };

  it('tracks the current roll', function() {
    gameRoll(2,3);
    expect(game.currentRoll).toEqual(2);
  });

  it('tracks frame', function() {
    gameRoll(3,3);
    expect(game.currentFrame).toEqual(2);
  });

  it('stores all rolls', function() {
    gameRoll(2,3);
    expect(game.allRolls.length).toEqual(2);
    expect(game.allRolls).toEqual([3,3])
  });

  it('stores all frames', function() {
    gameRoll(2,3);
    expect(game.allFrame).toEqual({1: [3,3]});
  });

  it('calculates the score of current frame', function() {
    gameRoll(1,3);
    expect(game.currentFrameScore()).toEqual(3);
  });

  it('cannot roll more than 10 points per frame', function() {
    spyOn(window, 'alert');
    gameRoll(2,6);
    expect(window.alert).toHaveBeenCalledWith('Not Possible');
    expect(game.allRolls.length).toEqual(1);
    expect(game.allFrame[game.currentFrame].length).toEqual(1);
  });

  it('recognises spare', function() {
    gameRoll(2,5);
    expect(game.isSpare()).toEqual(true);
  });

  it('recognises non spare', function() {
    gameRoll(2,4);
    expect(game.isSpare()).toEqual(false);
  });

  it('recognises a strike', function () {
    game.roll(10);
    expect(game.isStrike()).toEqual(true);
  });

});
