describe('Bowling', function() {
  var bowling

  beforeEach(function() {
    bowling = new Bowling()
  })

      it ('starts as an empty scorecard', function() {
      expect(bowling._rolls).toEqual([])
      })

      it('can roll three ones', function() {
        bowling.roll(1)
        bowling.roll(1)
        bowling.roll(1)
        expect(bowling._rolls[0]).toEqual(1)
        expect(bowling._rolls[1]).toEqual(1)
        expect(bowling._rolls[2]).toEqual(1)
      })

      it('can score a gutter game', function() {
        var i
        for (i = 0; i < 20; i ++ ) {
        bowling.roll(0)
        }
        bowling.score()
        expect(bowling._result).toEqual(0)
      })

      it('can score a whole game of ones', function() {
        rollMany(1, 20)
        bowling.score()
        expect(bowling._result).toEqual(20)
      })

      var rollMany = function(pinsDown, rolls) {
          var i
          for (i = 0; i < rolls; i ++) {
            bowling.roll(pinsDown)
      }
    }

    it('can roll a spare', function() {
      bowling.roll(5)
      bowling.roll(5)
      bowling.roll(3)
      var i
      for (i = 0; i < 17; i ++) {
      bowling.roll(0)
      }
      bowling.score()
      expect(bowling._result).toEqual(16)
    })

    it('can roll a perfect game', function() {
    rollMany(10, 12)
    bowling.score()
    expect(bowling._result).toEqual(300)

    })



}) // last brackets
