'use strict';

describe('Frame', () => {

  let frame;
  let next_frame;
  let next_next_frame;

  beforeEach(() => {
    frame = new Frame;
    next_frame = new Frame;
    next_next_frame = new Frame;
    frame.next_frame = next_frame;
    next_frame.next_frame = next_next_frame;
  });

  describe('roll', () => {
    it('exists', () => {
      expect(frame.roll).not.toBeUndefined();
    });
    it('will update roll_1 with 1', () => {
      frame.roll(1,1);
      expect(frame.roll_1).toEqual(1);
    });
    it('is a strike if roll 1 knocks down 10 pins', () => {
      frame.roll(1,10);
      expect(frame.roll_1).toEqual(10);
      expect(frame.strike).toBe(true);
      expect(frame.spare).toBe(false);
    });
    it('will update roll_2 with 1', () => {
      frame.roll(2,1);
      expect(frame.roll_2).toEqual(1);
    });
    it('is a spare if roll 1 + roll 2 is 10', () => {
      frame.roll(1,4);
      frame.roll(2,6);
      expect(frame.strike).toBe(false);
      expect(frame.spare).toBe(true);
    });
  });

  describe('score', () => {
    it('will score 5 when 1 and 4 are rolled', () => {
      frame.roll(1,1);
      frame.roll(2,4);
      expect(frame.score()).toEqual(5);
    });
    it('will score 10 when 6 and 4 are rolled, then update to 15 when next frame rolls 5', () => {
      frame.roll(1,6);
      frame.roll(2,4);
      expect(frame.score()).toEqual(10);
      next_frame.roll(1,5);
      next_frame.roll(2,5);
      expect(frame.score()).toEqual(15);
    });
    it('will score 10 when roll 1 is 10, then update to 17 when next frame rolls 3 and 4', () => {
      frame.roll(1, 10);
      expect(frame.score()).toEqual(10);
      next_frame.roll(1, 3);
      next_frame.roll(2, 4);
      expect(frame.score()).toEqual(17);
    });
    it('will score 30 when roll 1 is 10, next frame roll 1 is 10 and next next frame roll 1 is 10', () => {
      frame.roll(1, 10);
      expect(frame.score()).toEqual(10);
      next_frame.roll(1, 10);
      expect(frame.score()).toEqual(20);
      next_next_frame.roll(1, 10);
      expect(frame.score()).toEqual(30);
    });

  });

});
