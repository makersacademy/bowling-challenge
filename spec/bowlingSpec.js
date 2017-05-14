describe('Bowling', function () {

  //var Bowling = require('../js/bowling');
  var bowlingGame;

  beforeEach(function () {
    bowlingGame = new Bowling ();
  })

  describe('Games', function () {
    it('can be created', function () {
      var name = bowlingGame.constructor.name
      expect(name).toBe('Bowling')
    })
  })

  describe('Games', function () {
    it('can be all 0 scoring frames i.e. gutter rolls', function () {
      multiRoll(0, 20)
      expect(bowlingGame.scoreIs()).toEqual(0)
    })
    it('can be all 1\'s', function () {
      multiRoll(1, 20)
      expect(bowlingGame.scoreIs()).toEqual(20)
    })
  })

  describe('Spares', function () {
    it('can be rolled as 5, 5', function () {
      bowlingGame.roll(5)
      bowlingGame.roll(5)
      multiRoll(0, 18)
      expect(bowlingGame.scoreIs()).toEqual(10)
    })
    it('can be rolled as 3, 7', function () {
      bowlingGame.roll(3)
      bowlingGame.roll(7)
      bowlingGame.roll(5)
      multiRoll(0, 17)
      expect(bowlingGame.scoreIs()).toEqual(20)
    })
  })

  var multiRoll = function (pinsDown, rolls) {
    for (var i = 0; i < rolls; i++) {
      bowlingGame.roll(pinsDown);
    }
  }

})
