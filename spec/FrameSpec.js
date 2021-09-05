describe('Frame', () => {

  let frame;

  beforeEach(() => {
    frame = new Frame();
  })
  
  it('has current roll', () => {
    expect(frame.currentRoll).toEqual(0);
  })

  it('has rolls remaining', () => {
    expect(frame.rollsRemaining).toEqual(2);
  })

  it('has a frame score', () => {
    expect(frame.frameScore).toEqual(0);
  })

  describe('addRoll', () => {
    it('increments the current roll', () => {
      frame.addRoll(2)
      expect(frame.currentRoll).toEqual(1);
    })

    it('adds pins struck to frame score', () => {
      frame.addRoll(2)
      expect(frame.frameScore).toEqual(2);
    })
  })

  describe('isStrike', () => {
    it('returns true if last roll is strike condition', () => {
      frame.addRoll(10);
      expect(frame.isStrike()).toEqual(true);
    })
  })

  describe('isSplit', () => {
    it('returns true if last roll is split condition', () => {
      frame.addRoll(5);
      frame.addRoll(5);
      expect(frame.isSplit()).toEqual(true);
    })
  })
})