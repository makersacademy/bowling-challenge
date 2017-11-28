describe('Bowling', function() {
  beforeEach(function() {
    bowling = new Bowling;
    frame = new Frame;
  })

  describe('scorecard', function() {
    it('hold an array of frames', function() {
      expect(bowling.scorecard).toEqual([]);
    })
  })

  describe('#addToScorecard', function() {
    it('adds a frame to the scorecard', function() {
      bowling.addToScorecard(frame);
      expect(bowling.scorecard).toContain(frame);
    })
  })

})
