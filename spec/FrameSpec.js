describe('Frame', () => {
  let frame;

  beforeEach(() => {
    frame = new Frame();
  });

  it('starts with a bowl index of 1', () => {
    expect(frame.bowlIndex).toEqual(1);
  });

  describe('bowl', () => {
    beforeEach(() => {
      frame.bowl(7);
    });

    it('adds score of each bowl to a bowls array', () => {
      expect(frame.bowls).toContain(7);
    });

    it('increases the bowl index by 1', () => {
      expect(frame.bowlIndex).toEqual(2);
    });
  });

  describe('isStrike', () => {
    it('confirms when a bowl is a strike', () => {
      frame.bowl(10);
      expect(frame.isStrike()).toEqual(true);
    });
  });

  describe('isSpare', () => {
    it('confirms when a bowl is a spare', () => {
      frame.bowl(5);
      frame.bowl(5);
      expect(frame.isSpare()).toEqual(true);
    });
  });

  describe('FrameScore', () => {
    it('confirms regular frame score with no strike or spare', () => {
      frame.bowl(2);
      frame.bowl(6);
      expect(frame.FrameScore()).toEqual(8);
    });
  });

  describe('finalFrameScore', () => {
    it('confirms final frame score inc. strike or spare', () => {
      frame.finalFrame = true;
      frame.bowl(10);
      frame.bowl(5);
      frame.bowl(3);
      expect(frame.finalFrameScore()).toBe(18);
    });
  });
});
