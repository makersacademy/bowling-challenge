describe('Bowling Game', function() {
  var game;
  var bowls;
  var pins;
  var TOP_BOWL = 10;
  var extraBowls; // the rest of the bowls to close a game
  var extraPins; // the amount of pins hit during extraBowls

  beforeEach(function () {
    game = new Game();
  });

  function completeAllBowls(pins, bowls) {
    for(var i = 0; i < bowls; i++) {
      game.bowl(pins);
    }
  }

  function hitASpecial(bowls) {
    for (var i = 0; i < bowls; i++) {
      game.bowl(TOP_BOWL / bowls);
    }
  }

  it('calculates the score when pins are hit one at a time', function () {
    bowls = 20;
    pins = 1;
    completeAllBowls(pins, bowls);
    expect(game.calculateScore()).toBe(20);
  });

  it('calculates the score for a spare', function () {
    bowls = 2; // the two bowls that made a spare
    hitASpecial(bowls);
    game.bowl(6); // bowl for bonus points for spare

    extraBowls = 17;
    extraPins = 0;
    completeAllBowls(extraPins, extraBowls);
    expect(game.calculateScore()).toBe(22);
  });

  it('calculates the score for a strike', function() {
    bowls = 1 // the one bowl that made a strike
    hitASpecial(bowls);
    game.bowl(6); // bowl1 for bonus points for strike
    game.bowl(3); // bowl2 for bonus points for strike

    extraBowls = 17;
    extraPins = 0;
    completeAllBowls(extraPins, extraBowls);
    expect(game.calculateScore()).toBe(28);
  });

  it('calculates the score for a perfect game', function() {
    bowls = 1 // the one bowl that made a strike
    hitASpecial(bowls);
    hitASpecial(bowls);
    hitASpecial(bowls);
    hitASpecial(bowls);
    hitASpecial(bowls);
    hitASpecial(bowls);
    hitASpecial(bowls);
    hitASpecial(bowls);
    hitASpecial(bowls);
    hitASpecial(bowls);
    hitASpecial(bowls);
    hitASpecial(bowls);
    // completeAllBowls(extraPins, extraBowls);
    expect(game.calculateScore()).toBe(300);
  });

  it('calculates the score for a gutter', function() {
    bowls = 20;
    pins = 0;
    completeAllBowls(pins, bowls);
    expect(game.calculateScore()).toBe(0);
  });

});
