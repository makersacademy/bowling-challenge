describe('Bowling Scoreboard', function () {
  var game;

  beforeEach(function () {
    game = new Game();
  });

  function addManyBowls(bowl, times) {
    for (var i = 0; i < times; i++) {
      game.addBowl(bowl);
    }
  }

  describe('basic functions', function () {
    it('stores all of the bowls', function () {
      expect(game.allBowls).toEqual([])
    })

    it('adds a bowl to allBowls', function () {
      game.addBowl(1)
      expect(game.allBowls).toContain(1)
    })

    it('calculates the total', function () {
      game.addBowl(5)
      expect(game.calculateTotal()).toEqual(5)
    })
  })

  describe('Different games', function () {
    it('can bowl a gutter game', function () {
      addManyBowls(0, 20)
      expect(game.calculateTotal()).toEqual(0);
    })

    it('can bowl all 1s', function () {
      addManyBowls(1, 20)
      expect(game.calculateTotal()).toEqual(20)
    })

    it('can bowl a spare', function () {
      game.addBowl(5)
      game.addBowl(5)
      game.addBowl(2)
      addManyBowls(0, 17)
      expect(game.calculateTotal()).toEqual(14)
    })

    it('can bowl a strike', function () {
      game.addBowl(10)
      game.addBowl(4)
      game.addBowl(3)
      addManyBowls(0, 17)
      expect(game.calculateTotal()).toEqual(24)
    })

    it('can bowl a perfect game', function () {
      addManyBowls(10, 12)
      expect(game.calculateTotal()).toEqual(300)
    })
  })
})
