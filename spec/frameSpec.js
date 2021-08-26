describe('Frame', () => {

  beforeEach(() => {
    frame = new Frame(1);
  });

  it('should have a score by default', () => {
    expect(frame.score).toBeInstanceOf(Score);
  });

  describe('firstBowl', () => {
    it('should receive the first bowl from the Score class', () => {
      frame.firstBowl(1);
      expect(frame.score.firstBowlPins).toEqual(1);
    });

    it('knows if the first bowl was a strike', () => {
      frame.firstBowl(10);
      frame.isStrike();
      expect(frame.strike).toEqual(true)
    });
  });

  describe('secondBowl', () => {
    it('should receive the second bowl from the Score class', () => {
      frame.secondBowl(1);
      expect(frame.score.secondBowlPins).toEqual(1)
    });

    it('knows if the second bowl was a spare', () => {
      frame.firstBowl(1);
      frame.secondBowl(9)
      frame.isSpare();
      expect(frame.spare).toEqual(true)
    });
  });

  describe('calculateScore', () => {
    it('references the score class to confirm the score', () => {
      frame.firstBowl(1);
      frame.secondBowl(2);
      frame.calculateScore();
      expect(frame.frameTotal).toEqual(3);
    });
  });
});