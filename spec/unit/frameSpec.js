describe('Frame', () => {
  beforeEach(function () {
    frame = new Frame();
  });

  describe('#addRoll', () => {
    it ('allows user to add pins to total', () => {
      frame.addRoll(2);
      frame.addRoll(6);
      expect(frame.rolls).toEqual([2, 6])
    })
  });
 
})