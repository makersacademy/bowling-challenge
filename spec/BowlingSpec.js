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

}) // last brackets
