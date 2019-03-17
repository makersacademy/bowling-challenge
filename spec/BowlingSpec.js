describe('Bowling', function() {
  var bowling

  beforeEach(function() {
    bowling = new Bowling()
  })

      it('starts as an empty scorecard', function() {
      expect(bowling._rolls).toEqual([])
      })

      it('can score a gutter game', function() {
        var i
        for (i = 0; i < 20; i ++ ) {
        bowling.roll(0)
        }
        // bowling.score()
        expect(bowling.score()).toEqual(0)
      })

      it('can score a whole game of ones', function() {
        rollMany(1, 20)
        // bowling.score()
        expect(bowling.score()).toEqual(20)
      })

      var rollMany = function(pinsDown, rolls) {
          var i
          for (i = 0; i < rolls; i ++) {
            bowling.roll(pinsDown)
      }
    }

    it('can score a spare', function() {
      bowling.roll(5)
      bowling.roll(5)
      bowling.roll(3)
      var i
      for (i = 0; i < 17; i ++) {
      bowling.roll(0)
      }
      // bowling.score()
      expect(bowling.score()).toEqual(16)
    })

    // it('can score a perfect game', function() {
    // rollMany(10, 12)
    // bowling.score()
    // expect(bowling._result).toEqual(300)
    //
    // })
    //

}) // last brackets
