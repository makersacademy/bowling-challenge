const Frame = require('./frame')

describe('Frame', () => {
  beforeEach(() => {
    frame = new Frame();
  })

  describe('Rolls', () => {
    it('should start with no rolls', () => {
      expect(frame.rolls).toEqual(0);
    })

    it('should know how many rolls have been rolled', () => {
      frame.add_roll(2);
      expect(frame.rolls).toEqual(1);
    })
  })
  
  describe('Strike', () => {
    it('should know if the frame is not a strike', () => {
      frame.add_roll(2);
      frame.add_roll(8);
      expect(frame.strike).toEqual(false);
    })

    it('should know if the frame is a strike', () => {
      frame.add_roll(10);
      expect(frame.strike).toEqual(false);
    })
  })

  describe('Spare', () => {
    it('should know if the frame is not a spare', () => {
      frame.add_roll(2);
      frame.add_roll(2);
      expect(frame.spare).toEqual(false);
    })

    it('should know if the frame is a spare', () => {
      frame.add_roll(2);
      frame.add_roll(8);
      expect(frame.spare).toEqual(true);
    })
  })

  it('should know how many pins were taken down in the first roll', () => {
    frame.add_roll(2);
    expect(frame.first_roll).toEqual(2);
  })

  it('should know how many pins were taken down in the second roll', () => {
    frame.add_roll(2);
    frame.add_roll(3);
    expect(frame.first_roll).toEqual(3);
  })

  it('should know how many pins were taken down in the bonus roll', () => {
    frame.add_roll(2);
    frame.add_roll(8);
    frame.add_roll(3);
    expect(frame.first_roll).toEqual(3);
  })

})