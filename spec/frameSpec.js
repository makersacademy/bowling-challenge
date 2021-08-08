describe('Frame', () => {

  let frame;
  beforeEach(() => {
    frame = new Frame();
  });

  describe('start', () => {
    it('starts on frame 1', () => {
      expect(frame.currentFrame()).toEqual(1)
    });
  });

  describe('adds frame', () => {
    it('adds a frame', () => {
      frame.addFrame()
      expect(frame.currentFrame()).toEqual(2)
    });
  });

  describe('knows if its on roll 1 or two', () => {
    it('starts on roll 1', () => {
      expect(frame.currentRoll()).toEqual(1);
    });
    it('switches rolls from 1 to 2', () => {
      frame.nextRoll()
      expect(frame.currentRoll()).toEqual(2);
    });
    it('switches rolls from 2 to 1', () => {
      frame.nextRoll()
      frame.nextRoll()
      expect(frame.currentRoll()).toEqual(1);
    });
  });

  describe('knows if player is on final frame', () => {
    it('returns false if frame is not 10', () => {
      expect(frame.isOnFinalFrame()).toEqual(false)
    });
    it('returns false if frame is not 10', () => {
      for(let i = 0; i < 9; i ++){
        frame.addFrame();
      }
      expect(frame.isOnFinalFrame()).toEqual(true)
    });
  });
});

