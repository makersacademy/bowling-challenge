const Frame = require('../lib/frame');

describe('Frame', () => {
  it("has two roll variables initially set as null", () => {
    let frame = new Frame;
    expect(frame.firstRoll).toEqual(null);
    expect(frame.secondRoll).toEqual(null);
  });

  describe("addRolls", () => {
    it('throws an error when trying to knock down more than 10 pins on the first roll', () => {
      let frame = new Frame;
      expect(() => {
        frame.addFirstRoll(11);
      }).toThrow("Cannot knock down more pins than what is remaining");
    });

    it("throws an error when trying to knock down a negative number of pins on the first roll", () => {
      let frame = new Frame;
      expect(() => {
        frame.addFirstRoll(-3);
      }).toThrow("Cannot knock down a negative number of pins");
    });

    it("can add the number of pins knocked down on the first roll", () => {
      let frame = new Frame;
      frame.addFirstRoll(4);
      expect(frame.firstRoll).toEqual(4);
    });

    it('throws an error when trying to knock down more than the number of pins remaining on the second roll', () => {
      let frame = new Frame;
      expect(() => {
        frame.addSecondRoll(11);
      }).toThrow("Cannot knock down more pins than what is remaining");
    });

    it("throws an error when trying to knock down a negative number of pins on the second roll", () => {
      let frame = new Frame;
      expect(() => {
        frame.addSecondRoll(-3);
      }).toThrow("Cannot knock down a negative number of pins");
    });

    it("can add the number of pins knocked down on the second roll", () => {
      let frame = new Frame;
      frame.addSecondRoll(2);
      expect(frame.secondRoll).toEqual(2);
    });
  })
  
  describe("isSpare", () => {
    it("returns true when 10 pins have been knocked down using both rolls", () => {
      let frame = new Frame;
      frame.addFirstRoll(4);
      frame.addSecondRoll(6);
      expect(frame.isSpare()).toBeTruthy();
    })

    it("returns false when less than 10 pins have been knocked down using both rolls", () => {
      let frame = new Frame;
      frame.addFirstRoll(3);
      frame.addSecondRoll(6);
      expect(frame.isSpare()).toBeFalsy();
    })
  });

  describe("isStrike", () => {
    it("returns true when 10 pins are knocked down on the first roll", () => {
      let frame = new Frame;
      frame.addFirstRoll(10);
      expect(frame.isSpare()).toBeFalsy;
      expect(frame.isStrike()).toBeTruthy;
    });

    it("returns false when 10 pins aren't knocked down on the first roll", () => {
      let frame = new Frame;
      frame.addFirstRoll(7);
      frame.addSecondRoll(3);
      expect(frame.isStrike()).toBeFalsy;
    });
  });
});