const Frame = require('./frame')

describe('Frame', () => {
  // beforeEach(() => {
  //   const frame = new Frame();
  // })

  describe('Rolls', () => {
    it('should start with no rolls', () => {
      const frame = new Frame();
      expect(frame.rolls()).toEqual(0);
    })

    it('should know how many rolls have been rolled', () => {
      const frame = new Frame();
      frame.addRoll(2);
      expect(frame.rolls()).toEqual(1);
    })
  })
  
  describe('Strike', () => {
    it('should know if the frame is not a strike', () => {
      const frame = new Frame();
      frame.addRoll(2);
      frame.addRoll(8);
      expect(frame.isStrike()).toEqual(false);
    })

    it('should know if the frame is a strike', () => {
      const frame = new Frame();
      frame.addRoll(10);
      expect(frame.isStrike()).toEqual(true);
    })
  })

  describe('Spare', () => {
    it('should know if the frame is not a spare', () => {
      const frame = new Frame();
      frame.addRoll(2);
      frame.addRoll(2);
      expect(frame.isSpare()).toEqual(false);
    })

    it('should know if the frame is a spare', () => {
      const frame = new Frame();
      frame.addRoll(2);
      frame.addRoll(8);
      expect(frame.isSpare()).toEqual(true);
    })
  })

  it('should know how many pins were taken down in the first roll', () => {
    const frame = new Frame();
    frame.addRoll(2);
    expect(frame.firstRoll()).toEqual(2);
  })

  it('should know how many pins were taken down in the second roll', () => {
    const frame = new Frame();
    frame.addRoll(2);
    frame.addRoll(3);
    console.log(frame);
    expect(frame.secondRoll()).toEqual(3);
  })

  it('should know how many pins were taken down in the bonus roll', () => {
    const frame = new Frame();
    frame.addRoll(2);
    frame.addRoll(8);
    frame.addRoll(3);
    expect(frame.bonusRoll()).toEqual(3);
  })

})