'use strict';

import Frame from '../src/frame.js';

describe('Frame', () => {
  let frame;
  describe('adding rolls', () => {
    beforeEach(() => {
      frame = new Frame();
    });
    it('can add a roll', () => {
      frame.add(3);
      expect(frame.scores).toEqual([3]);
    });
    it('can add a second roll', () => {
      frame.add(3);
      frame.add(5);
      expect(frame.scores).toEqual([3, 5]);
    });
    it('can add a strike', () => {
      frame.add(10);
      expect(frame.scores).toEqual([10, 0]);
    });
  });
  it('knows the frame has finished', () => {
    frame = new Frame();
    frame.add(3);
    frame.add(4);
    expect(frame.isFinished()).toBe(true);
  });
});
