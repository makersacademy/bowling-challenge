describe('Bowling', function() {
  beforeEach(function() {
    bowling = new Bowling;
  })

  describe('scorecard', function() {
    it('hold an array of frames', function() {
      expect(bowling.scorecard).toEqual([]);
    })
  })

})
