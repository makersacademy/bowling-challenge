describe('Bowling', function() {
  var bowling

  beforeEach(function() {
    bowling = new Bowling()
  })

      it ('starts as an empty scorecard', function() {
      expect(bowling.rolls).toEqual([])
      })

      it('can roll three ones', function() {
        bowling.roll(1)
        bowling.roll(1)
        bowling.roll(1)
        expect(bowling.rolls[0]).toEqual(1)
        expect(bowling.rolls[1]).toEqual(1)
        expect(bowling.rolls[2]).toEqual(1)
      })

      it('can score a gutter game', function() {
        var i
        for (i = 0; i < 20; i ++ ) {
        bowling.roll(0)
        }
        bowling.score()
        expect(bowling.result).toEqual(0)
      })

      it('can score a whole game of ones', function() {
        rollMany(1, 20)
        bowling.score()
        expect(bowling.result).toEqual(20)
      })

      var rollMany = function(pinsDown, rolls) {
          var i
          for (i = 0; i < rolls; i ++) {
            bowling.roll(pinsDown)
      }
    }




}) // last brackets
