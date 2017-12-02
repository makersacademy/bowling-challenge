describe('Bowling', function() {
  beforeEach(function() {
    scorecard = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    bowling = new Bowling(scorecard);
  })

  describe('scorecard', function() {
    it('initialized with an instance of Scorecard', function() {
      expect(bowling.scorecard).toEqual(scorecard);
    })
  })

})
