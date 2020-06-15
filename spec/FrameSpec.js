describe('Frame', () => {

  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  describe('isComplete', () => {

    it('should default to false', () => {
      expect(frame.isComplete()).toBe(false);
    });

    it('if both rolls are made should be true', () => {
      frame.roll1 = 2
      frame.roll2 = 2
      expect(frame.isComplete()).toBe(true);
    });

    it('if the frame is a strike should be true', () => {
      frame.roll1 = 10
      expect(frame.isComplete()).toBe(true);
    });

    it('if the frame is a gutter then ten should be true', () => {
      frame.roll1 = 0
      frame.roll2 = 10
      expect(frame.isComplete()).toBe(true);
    });
  });

  describe('isSpare()', () => {
    it('should return true if the rolls are 5 and 5 (total 10)', () => {
      frame.roll1 = 5
      frame.roll2 = 5
      expect(frame.isSpare()).toEqual(true);
    });
  
    it('should return false if the rolls are 1 and 1 (total 2)', () => {
      frame.roll1 = 1
      frame.roll2 = 1
      expect(frame.isSpare()).toEqual(false);
    });

    it('should return false if the frame is a strike', () => {
      frame.roll1 = 10
      expect(frame.isSpare()).toEqual(false);
    });

  });
  
  describe('isStrike()', () => {
    it('should return true is roll1 is 10', () => {
      frame.roll1 = 10
      expect(frame.isStrike()).toEqual(true);
    });
    it('should return false is roll1 is not 10', () => {
      frame.roll1 = 7
      expect(frame.isStrike()).toEqual(false);
    });

  });
});