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

  describe('#totalPoints', function() {
    it('keeps track of the total points', function() {
      roll.pinfall = 4;
      frame.addRollToFrame(roll);
      roll2 = new Roll;
      roll2.pinfall = 2;
      frame.addRollToFrame(roll2);
      expect(frame.totalPoints).toEqual(6);
    })
  })
})
