const Frame = require("../main/frame");

describe("frame", () => {
  it("has a score property of 0", () => {
    const frame = new Frame();
    expect(frame.score).toEqual(0);
  });

  describe("addRoll", () => {
    it("adds first roll to frame", () => {
      const frame = new Frame();
      frame.addRoll(5);
      expect(frame.roll1).toEqual(5);
    });

    it("adds second roll to frame", () => {
      const frame = new Frame();
      frame.addRoll(3);
      frame.addRoll(7);
      expect(frame.roll1).toEqual(3);
      expect(frame.roll2).toEqual(7);
    });
  });

  describe('addBonus', () => {
    it('adds first bonus to roll', () => {
      const frame = new Frame();
      frame.addRoll(7)
      frame.addRoll(3)
      frame.addBonus(7)
      expect(frame.bonus1).toEqual(7)
    })
    it('adds second bonus to roll', () => {
      const frame = new Frame();
      frame.addRoll(10)
      frame.addBonus(7)
      frame.addBonus(3)
      expect(frame.bonus2).toEqual(3)
    })
  })

  describe('isComplete', () => {
    describe('when strike', () => {
      it('returns true', () => {
        const frame = new Frame()
        frame.addRoll(10)
        expect(frame.isComplete()).toEqual(true)
      })
    })
    describe('when 2 rolls', () => {
      it('returns true', () => {
        const frame = new Frame()
        frame.addRoll(2)
        frame.addRoll(7)
        expect(frame.isComplete()).toEqual(true)
      })
    })
    describe('when 1 roll and NOT strike', () => {
      it('returns false', () => {
        const frame = new Frame()
        frame.addRoll(2)
        expect(frame.isComplete()).toEqual(false)
      })
    })
  })

  describe("isStrike", () => {
    it("returns true", () => {
      const frame = new Frame();
      frame.addRoll(10);
      expect(frame.isStrike()).toEqual(true);
    });

    describe('when spare frame', () => {
      it('returns false', () => {
        const frame = new Frame();
        frame.addRoll(3);
        frame.addRoll(7);
        expect(frame.isStrike()).toEqual(false);
      })
    })

    describe('when open frame', () => {
      it('returns false', () => {
        const frame = new Frame();
        frame.addRoll(2);
        frame.addRoll(7);
        expect(frame.isStrike()).toEqual(false);
      })
    })
  });

  describe("isSpare", () => {
    it("returns true", () => {
      const frame = new Frame();
      frame.addRoll(3);
      frame.addRoll(7);
      expect(frame.isSpare()).toEqual(true);
    });

    describe('when strike frame', () => {
      it('returns false', () => {
        const frame = new Frame();
        frame.addRoll(10);
        expect(frame.isSpare()).toEqual(false);
      })
    })

    describe('when open frame', () => {
      it('returns false', () => {
        const frame = new Frame();
        frame.addRoll(2);
        frame.addRoll(7);
        expect(frame.isSpare()).toEqual(false);
      })
    })
  });
});
