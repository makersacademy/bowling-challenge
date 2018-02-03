/* eslint-env jasmine */

describe('Frame', () => {
  let frame;

  beforeEach(() => {
    frame = new Frame();
  });

  describe('Score', () => {
    it('has a score of 7 after one roll of seven', () => {
      frame.roll(7);

      expect(frame.score()).toEqual(7);
    });

    it('has a score of after two rolls of 7 and 2 nine', () => {
      frame.roll(7);
      frame.roll(2);

      expect(frame.score()).toEqual(9);
    });

    it('still has a score of nine, after three rolls of 7, 2, 4', () => {
      frame.roll(7);
      frame.roll(2);
      frame.roll(2);

      expect(frame.score()).toEqual(9);
    });

    it('has a score of a score of 13 after three rolls of 7, 3, 4 ', () => {
      frame.roll(7);
      frame.roll(3);
      frame.roll(4);

      expect(frame.score()).toEqual(14);
    });

    it('has a score of a score of 13 after three rolls of 7, 3, 4, 8 ', () => {
      frame.roll(7);
      frame.roll(3);
      frame.roll(4);
      frame.roll(8);

      expect(frame.score()).toEqual(14);
    });

    it('has a score of a score of 20 after a strike and two rolls of, 7, 3', () => {
      frame.roll(10);
      frame.roll(7);
      frame.roll(3);

      expect(frame.score()).toEqual(20);
    });
  });

  describe('Finished', () => {
    it('has not finished after one roll', () => {
      frame.roll(7);

      expect(frame.isFinished()).toBe(false);
    });

    it('has finished finished after two rolls', () => {
      frame.roll(7);
      frame.roll(2);

      expect(frame.isFinished()).toBe(true);
    });

    it('has finished finished after a strike', () => {
      frame.roll(10);

      expect(frame.isFinished()).toBe(true);
    });
  });
});
