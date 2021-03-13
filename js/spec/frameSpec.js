'use strict';

describe('Frame', () => {
  let frame;

  beforeEach(() => {
    frame = new Frame
  })

  describe('score', () => {
    it('calculates the score after 1 roll', () => {
      frame.addRoll(5)
      expect(frame.score()).toBe(5)
    });
  });

  describe('isOver', () => {
    it('knows it is over after 2 rolls', () => {
      frame.addRoll(5)
      frame.addRoll(5)
      expect(frame.isOver()).toBe(true)
    });

    it('knows it is not over after 1 roll', () => {
      frame.addRoll(5)
      expect(frame.isOver()).toBe(false)
    });

    describe('after a strike', () => {
      it('knows it is over', () => {
        frame.addRoll(10);
        expect(frame.isOver()).toBe(true);
      });
    });
  });

  describe('bonusCount', () => {
    it('is 0 by default', () => {
      expect(frame.bonusCount).toBe(0);
    })

    it('is 2 after a strike', () => {
      frame.addRoll(10);
      expect(frame.bonusCount).toBe(2);
    });

    it('is 1 after a spare', () => {
      frame.addRoll(7);
      frame.addRoll(3);
      expect(frame.bonusCount).toBe(1);
    });
  });

  describe('bonus', () => {
    it('is 0 by default', () => {
      expect(frame.bonus).toBe(0);
    });
  });

  describe('addBonus', () => {
    it('adds score to bonus', () => {
      frame.addRoll(10)
      frame.addBonus(6);
      expect(frame.bonus).toBe(6)
    });

    it('reduces the bonus count by 1', () => {
      frame.addRoll(10);
      expect(frame.bonusCount).toBe(2);

      frame.addBonus(6);
      expect(frame.bonusCount).toBe(1)
    });

    it('does not add anything if bonus count is 0', () => {
      frame.addBonus(10);
      expect(frame.bonus).toBe(0);
    });
  });
});
