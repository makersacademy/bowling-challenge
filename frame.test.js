const Frame = require('./frame');

beforeEach(() => {
  frame = new Frame();
});

describe('Frame', () => {
  it('should be able to roll and add the score to roll1', () => {
    frame.roll(3);

    expect(frame.roll1).toBe(3);
  });

  it('should be able to roll and add score to roll2', () => {
    frame.roll(3);
    frame.roll(4);

    expect(frame.roll2).toBe(4);
  });

  it('should be able to check whether a spare has been rolled', () => {
    frame.roll(6);
    frame.roll(4);

    expect(frame.spare()).toEqual(true);
  });

  it('should be able to check whether a spare has not been rolled', () => {
    frame.roll(6);
    frame.roll(3);

    expect(frame.spare()).toEqual(false);
  });

  it('should be able to check whether a strike has been rolled', () => {
    frame.roll(10);

    expect(frame.strike()).toEqual(true);
  });

  it('should be able to check whether a strike has not been rolled', () => {
    frame.roll(9);

    expect(frame.strike()).toEqual(false);
  });

  it('should check if a frame is complete', () => {
    frame.roll(10);

    expect(frame.complete).toEqual(true);
  });

  it('should check if a frame is not complete after one roll', () => {
    frame.roll(9);

    expect(frame.complete).toEqual(false);
  });

  it('should check if a frame is not complete after no rolls', () => {
    expect(frame.complete).toEqual(false);
  });

  it('should check if a frame is complete after two rolls', () => {
    frame.roll(8);
    frame.roll(1);

    expect(frame.complete).toEqual(true);
  });

  it('should check if a frame is not complete after a spare on turn 10', () => {
    const frame = new Frame(10);
    frame.roll(8);
    frame.roll(2);

    expect(frame.complete).toEqual(false);
  });

  it('should check if a frame is complete after no strike or spare on turn 10', () => {
    const frame = new Frame(10);
    frame.roll(8);
    frame.roll(1);

    expect(frame.complete).toEqual(true);
  });

  it('should be able to add a bonus roll to roll3 when turn 10 and a strike or spare rolled', () => {
    const frame = new Frame(10);
    frame.roll(8);
    frame.roll(2);
    frame.roll(3);

    expect(frame.roll3).toEqual(3);
  });

  it('should not be able to throw a bonus roll when frame is complete', () => {
    const frame = new Frame(10);
    frame.roll(8);
    frame.roll(1);

    expect(() => {
      frame.roll(3);
    }).toThrow('This frame is complete');
  });

  it('should raise an error if you try and roll when a game is complete', () => {
    frame.roll(10);

    expect(() => {
      frame.roll(3);
    }).toThrow('This frame is complete');
  });

  it('should not be able to roll more than 10 on any given roll', () => {
    expect(() => {
      frame.roll(11);
    }).toThrow('You cannot roll more than 10');
  });

  it('should not be able to roll a negative number', () => {
    expect(() => {
      frame.roll(-1);
    }).toThrow('You cannot roll less than 0');
  });
});
