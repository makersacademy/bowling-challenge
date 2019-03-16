describe('Bowling', function() {
  var bowling

  beforeEach(function() {
    bowling = new Bowling()
  })

      it ('starts as an empty scorecard', function() {
      expect(bowling.rolls).toEqual([])
      })

}) // last brackets
