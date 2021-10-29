const Frame = require('./frame');

describe('Frame', () => {

  beforeEach(() => {
    frame = new Frame.Frame();
  });
  
  it('stores the number of pins for a roll', () => {
    frame.addPins(5)
    expect(frame.pins).toEqual([5])

    frame.addPins(4)
    expect(frame.pins).toEqual([5, 4])
  });


  it('knows if it is a strike', () => {
    frame.addPins(10)
    expect(frame.isStrike()).toBe(true)
    expect(frame.isSpare()).toBe(false)
  });

  it('knows if it is a spare', () => {
    frame.addPins(6)
    expect(frame.isSpare()).toBe(false)
    expect(frame.isStrike()).toBe(false)

    frame.addPins(4)
    expect(frame.isSpare()).toBe(true)
    expect(frame.isStrike()).toBe(false)

    let otherFrame = new Frame.Frame()
    otherFrame.addPins(0)
    otherFrame.addPins(10)
    expect(otherFrame.isSpare()).toBe(true)
    expect(otherFrame.isStrike()).toBe(false)
  });

  it('calculates the bonus for a spare as 1', () => {
    frame.addPins(6)
    frame.addPins(4)

    frame.calculateBonus()
    expect(frame.bonusRolls).toBe(1)
    expect(frame.hasActiveBonus()).toBe(true)
  });

  it('calculates the bonus for a strike as 2', () => {
    frame.addPins(10)

    frame.calculateBonus()
    expect(frame.bonusRolls).toBe(2)
    expect(frame.hasActiveBonus()).toBe(true)
  });

  it('can deduct bonus rolls', () => {
    frame.addPins(10)
    frame.calculateBonus()
    frame.deductBonusRoll()
    expect(frame.bonusRolls).toBe(1)
  });

  describe('Completing frames', () => {

    it('knows that a frame is complete after 2 rolls', () => {
      frame.addPins(3)
      expect(frame.isComplete()).toBe(false)

      frame.addPins(5)
      expect(frame.isComplete()).toBe(true)
    });

    it('knows that a frame is when you roll a strike', () => {
      frame.addPins(10)
      expect(frame.isComplete()).toBe(true)
    });

  });

  describe('Frame totals', () => {

    it('calculates and updates the total score for the frame', () => {
      expect(frame.total).toBe(0)
      frame.addPins(7)
      frame.addPins(2)

      frame.calculateTotal()
      expect(frame.total).toBe(9)
    });

    it('updates the total by a specified amount', () => {
      frame.updateTotal(5)
      expect(frame.total).toBe(5)
    });

  });

  describe('Final frame', () => {

    beforeEach(() => {
      finalFrame = new Frame.FinalFrame();
    });

    it('is complete after 2 rolls and with no bonuses', () => {
      finalFrame.addPins(7)
      expect(finalFrame.isComplete()).toBe(false)

      finalFrame.addPins(2)
      expect(finalFrame.isComplete()).toBe(true)
    });

    it('is complete after a strike and 2 bonus rolls (3 rolls total)', () => {
      finalFrame.addPins(10)
      expect(finalFrame.isComplete()).toBe(false)

      finalFrame.addPins(2)
      expect(finalFrame.isComplete()).toBe(false)

      finalFrame.addPins(2)
      expect(finalFrame.isComplete()).toBe(true)
    });

    it('is complete after a spare and 1 bonus roll (3 rolls total)', () => {
      finalFrame.addPins(8)
      expect(finalFrame.isComplete()).toBe(false)

      finalFrame.addPins(2)
      expect(finalFrame.isComplete()).toBe(false)

      finalFrame.addPins(4)
      expect(finalFrame.isComplete()).toBe(true)
    });

  });

});
