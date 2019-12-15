const protos = require('../../lib/javascript/frame.js');

const { Frame } = protos;
const { FrameError } = protos;

describe('Frame', () => {
  const Roll = jasmine.createSpy('Roll',
    (number, rolls) => ({ score: () => number, rolls }))
    .and.callThrough();

  let frame;

  beforeEach(() => {
    Roll.calls.reset();
    frame = new Frame(1, Roll);
  });

  describe('constructor', () => {
    it('sets the frame number', () => {
      for (let i = 1; i <= 10; i++) {
        frame = new Frame(i, Roll);
        expect(frame.frameNumber()).toEqual(i);
      }
    });

    it('has an initial score of 0', () => {
      frame = new Frame(1, Roll);
      expect(frame.score()).toEqual(0);
    });

    it('should raise an error on a number below 1', () => {
      expect(() => new Frame(0, Roll))
        .toThrowError(FrameError, 'Cannot have a frame number below 1');
    });

    it('should raise an error on a number above 10', () => {
      expect(() => new Frame(11, Roll))
        .toThrowError(FrameError, 'Cannot have a frame number above 10');
    });
  });

  describe('.addRoll', () => {
    it('should increase the score by the amount given', () => {
      frame.addRoll(8);
      expect(frame.score()).toEqual(8);
    });

    it('should return the roll', () => {
      const roll = frame.addRoll(8);
      expect(roll.score()).toEqual(8);
      expect(roll.rolls).toEqual(0);
    });

    it('should total two rolls', () => {
      frame.addRoll(5);
      frame.addRoll(1);
      expect(frame.score()).toEqual(6);
    });

    it('should throw an error if more than three rolls are added', () => {
      frame.addRoll(3);
      frame.addRoll(3);
      expect(() => frame.addRoll(3))
        .toThrowError(FrameError,
          'Cannot have more than 2 rolls in frame 1');
    });

    it('should throw an error for a fourth roll on the last frame', () => {
      frame = new Frame(10, Roll);
      frame.addRoll(10);
      frame.addRoll(10);
      frame.addRoll(9);
      expect(() => frame.addRoll(10))
        .toThrowError(FrameError,
          'Cannot have more than 3 rolls in frame 10');
    });

    it('should throw an error if two rolls total more than 10', () => {
      frame.addRoll(3);
      expect(() => frame.addRoll(8))
        .toThrowError(FrameError, 'Rolls in a frame cannot total more than 10');
    });

    it('should call Roll with 0 additional rolls for a normal throw', () => {
      frame.addRoll(3);
      expect(Roll).toHaveBeenCalledWith(3, 0);
    });

    it('should call Roll with 1 additonal roll for a spare', () => {
      frame.addRoll(4);
      expect(Roll).toHaveBeenCalledWith(4, 0);
      frame.addRoll(6);
      expect(Roll).toHaveBeenCalledWith(6, 1);
    });

    it('should call Roll with 2 additional rolls for a strike', () => {
      frame.addRoll(10);
      expect(Roll).toHaveBeenCalledWith(10, 2);
    });

    it('should call Roll with 0 additonal rolls for the last frame', () => {
      frame = new Frame(10, Roll);
      frame.addRoll(10);
      frame.addRoll(10);
      frame.addRoll(10);
      expect(Roll.calls.allArgs()).toEqual([
        [10, 0],
        [10, 0],
        [10, 0],
      ]);
    });
  });

  describe('.getNextFrame', () => {
    it('should return itself if no throw have been taken', () => {
      expect(frame.getNextFrame()).toEqual(frame);
    });

    it('should return itself after a normal throw', () => {
      frame.addRoll(4);
      expect(frame.getNextFrame()).toEqual(frame);
    });

    it('should return a new frame after tw normal throws', () => {
      frame.addRoll(3);
      frame.addRoll(3);
      const newFrame = frame.getNextFrame();
      expect(newFrame).not.toEqual(frame);
      expect(newFrame).toBeInstanceOf(Frame);
      expect(newFrame.frameNumber()).toEqual(2);
      expect(newFrame.score()).toEqual(0);
    });

    it('should return a new frame after a spare', () => {
      frame.addRoll(3);
      frame.addRoll(7);
      const newFrame = frame.getNextFrame();
      expect(newFrame).not.toEqual(frame);
      expect(newFrame).toBeInstanceOf(Frame);
      expect(newFrame.frameNumber()).toEqual(2);
      expect(newFrame.score()).toEqual(0);
    });

    it('should return a new frame after a strike', () => {
      frame.addRoll(10);
      const newFrame = frame.getNextFrame();
      expect(newFrame).not.toEqual(frame);
      expect(newFrame).toBeInstanceOf(Frame);
      expect(newFrame.frameNumber()).toEqual(2);
      expect(newFrame.score()).toEqual(0);
    });

    it('should return undefined if end of game', () => {
      frame = new Frame(10, Roll);
      frame.addRoll(2);
      frame.addRoll(5);
      expect(frame.getNextFrame()).not.toBeDefined();
    });

    it('should get three rolls if a strike on last frame', () => {
      frame = new Frame(10, Roll);
      frame.addRoll(10);
      expect(frame.getNextFrame()).toEqual(frame);
      frame.addRoll(5);
      expect(frame.getNextFrame()).toEqual(frame);
      frame.addRoll(5);
      expect(frame.getNextFrame()).not.toBeDefined();
    });

    it('should get three rolls if a spare on the last frame', () => {
      frame = new Frame(10, Roll);
      frame.addRoll(5);
      frame.addRoll(5);
      expect(frame.getNextFrame()).toEqual(frame);
      frame.addRoll(5);
      expect(frame.getNextFrame()).not.toBeDefined();
    });
  });

  describe('.isStrike and .isSpare', () => {
    it('should return false before any rolls', () => {
      expect(frame.isStrike()).toEqual(false);
      expect(frame.isSpare()).toEqual(false);
    });

    it('should return false for a normal throw', () => {
      frame.addRoll(3);
      expect(frame.isStrike()).toEqual(false);
      expect(frame.isSpare()).toEqual(false);
    });

    it('should return fals for two normal throws', () => {
      frame.addRoll(8);
      frame.addRoll(1);
      expect(frame.isStrike()).toEqual(false);
      expect(frame.isSpare()).toEqual(false);
    });

    it('should return true for .isStrike if a strike', () => {
      frame.addRoll(10);
      expect(frame.isStrike()).toEqual(true);
      expect(frame.isSpare()).toEqual(false);
    });

    it('should return true for .isSpare if a spare', () => {
      frame.addRoll(7);
      frame.addRoll(3);
      expect(frame.isStrike()).toEqual(false);
      expect(frame.isSpare()).toEqual(true);
    });
  });
});
