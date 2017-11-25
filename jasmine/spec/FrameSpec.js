describe('Frame', function() {
  beforeEach(function() {
    frame = new Frame;
    roll = new Roll;
  })

  describe('#addRollToFrame', function() {
    it('adds a Roll to the Frame', function() {
      frame.addRollToFrame(roll);
      expect(frame.rollTally).toContain(roll);
    })
  })
})
