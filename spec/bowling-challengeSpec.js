describe('Bowling Challenge', function() {

  var game;

  beforeEach(function() {
    game = new BowlingGame();
  })

    it('can roll a gutter game', function() {
      rollMany(0, 20);
      expect(game.score()).toBe(0)
    })

    it('can roll all ones', function () {
      rollMany(1, 20);
      expect(game.score()).toBe(20);
    })

    it('can roll a spare', function () {
      game.roll(5);
      game.roll(5);
      game.roll(3);
      rollMany(0, 17);
      expect(game.score()).toBe(16);
    })

    it('can roll a strike', function () {
      game.roll(10);
      game.roll(4);
      game.roll(3);
      rollMany(0, 16);
      expect(game.score()).toBe(24)
    })

    it('can roll a perfect game', function () {
      rollMany(10, 12);
      expect(game.score()).toBe(300)
    })



  var rollMany = function (pins, rolls) {
    for (var i = 0; i < rolls; i++) {
      game.roll(pins)
    }
  }

})
