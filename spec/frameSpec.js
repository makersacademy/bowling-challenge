describe('Frame', () => {

  beforeEach( () => {
    frame = new Frame(1);
  });

  describe('firstBowl', () => {
    it('should receive the first bowl from the Score class', () => {
      frame.firstBowl(1);
      expect(frame.score.firstBowlPins).toEqual(1)
    });
  });

  describe('secondBowl', () => {
    it('should receive the second bowl from the Score class', () => {
      frame.secondBowl(1);
      expect(frame.score.secondBowlPins).toEqual(1)
    });
  });

});