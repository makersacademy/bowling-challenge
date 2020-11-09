'use strict';

describe('Frame', () => {

  let frame;

  beforeEach( () => {
    frame = new Frame;
  });

  describe('bowl', () => {

    it('starts with 0 points scored', () => {
      expect([]).toEqual([]);
    });

    it('adds score to first bowl on first go', () => {
      frame.bowl(5);
      expect(frame.firstBowl()).toEqual(5);
    });

    it('adds score to second bowl on second go', () => {
      frame.bowl(5);
      frame.bowl(3);
      expect(frame.secondBowl()).toEqual(3);
    });
  });

  describe('complete', () => {

    it('starts off incomplete', () => {
      expect(frame.isComplete()).toBe(false);
    });

    it('is true when 2 bowls have happened', () =>  {
      frame.bowl(3);
      frame.bowl(3);
      expect(frame.isComplete()).toBe(true);
    });

    it('is true when there is a strike', () => {
      frame.bowl(10);
      expect(frame.isComplete()).toBe(true);
    });
  });

  describe('strike', () => {

    it('knows when it is a strike', () => {
      frame.bowl(10);
      expect(frame.isAStrike()).toBe(true);
    });

    it('knows when it is not a strike', () => {
      expect(frame.isAStrike()).toBe(false);
      frame.bowl(5);
      expect(frame.isAStrike()).toBe(false);
    });
  });

  describe('spare', () =>  {

    it('knows when it is a spare', () => {
      frame.bowl(5);
      frame.bowl(5);
      expect(frame.isASpare()).toBe(true);
    });

    it('knows when it is not a spare', () => {
      expect(frame.isASpare()).toBe(false);
      frame.bowl(3);
      frame.bowl(3);
      expect(frame.isASpare()).toBe(false);
    });

    it('knows it is not a spare when strike bowled', () => {
      frame.bowl(10);
      expect(frame.isASpare()).toBe(false);
    });
  });

  describe('points', () =>  {

    it('gutter ball situation', () =>  {
      frame.bowl(0);
      frame.bowl(0);
      expect(frame.points()).toEqual(0);
    });

    it('normal bowls situation', () =>  {
      frame.bowl(3);
      frame.bowl(3);
      expect(frame.points()).toEqual(6);
    });

    it('spare situation', () =>  {
      frame.bowl(5);
      frame.bowl(5);
      expect(frame.points()).toEqual(10);
    });

    it('strike situation', () => {
      frame.bowl(10);
      expect(frame.points()).toEqual(10);
    });
  });

});