describe('Bowling Game', function() {
  var game;
  var bowls;
  var pin;

  beforeEach(function () {
    game = new Game();
  });

  function bowlings(pin, bowls) {
    for(var i = 0; i < bowls; i++) {
      game.bowl(pin);
    }
  }

  it('calculates the score when pins are hit one at a time', function () {
    bowls = 20;
    pin = 1;
    bowlings(pin, bowls);
    expect(game.calculateScore()).toBe(20);
  });

  // it('calculates the score for a spare', function () {
  //   var aSpare = 2;
  //   var extraBowls = 16;
  //   var extraPins = 0;
  //   for (var i = 0; i < aSpare; i++) {
  //     game.bowl(5);
  //   }
  //   game.bowl(6);
  //   game.bowl(7);
  //   bowlings(extraPins, extraBowls);
  //   expect(game.calculateScore()).toBe(29);
  // });
});
