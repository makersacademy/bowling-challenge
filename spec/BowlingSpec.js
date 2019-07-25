describe('bowling game', function() {

  var game;

  beforeEach(function () {
    game = new Bowling();
  });

  var rollMany = function (pins,rolls) {
    for (var n=0; n<20; n++) {
      game.roll(pins);
    }
  };
  it('Gutter Game is when the player never hits a pin', function () {
    rollMany(0, 20);
    expect(game.score()).toEqual(0);
  });
    it('can roll all pins', function() {
    rollMany(1, 20);
    expect(game.score()).toEqual(20);
    })


});
