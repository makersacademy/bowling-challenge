describe('Bowling Game', function() {
  var game;
  var bowls;
  var pins;

  beforeEach(function () {
    game = new Game();
  });

  function bowlings(pins, bowls) {
    for(var i = 0; i < bowls; i++) {
      game.bowl(pins);
    }
  }

  it('calculates the score when pins are hit one at a time', function () {
    bowls = 20;
    pins = 1;
    bowlings(pins, bowls);
    expect(game.calculateScore()).toBe(20);
  });

  it('calculates the score for a spare', function () {
    var theSpare = 2; // the two bowls that made a spare
    var extraBowls = 17; // the rest of the bowls to close a game
    var extraPins = 0; // the amount of pins hit during extraBowls
    for (var i = 0; i < theSpare; i++) {
      game.bowl(5); 
    }
    game.bowl(6); // bowl for bonus points for spare
    bowlings(extraPins, extraBowls);
    expect(game.calculateScore()).toBe(22);
  });
});
