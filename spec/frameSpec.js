'use strict';

describe('Frame', function() {
  let frame;

  beforeEach(function() {
    frame = new Frame(1);
  })

  describe('#addRoll(roll)', function() {

    it("adds the given roll to the frame's rolls if frame is incomplete", function() {
      let roll = { pins: 3 };
      frame.addRoll(roll)

      expect(function() { frame.addRoll(roll) }).not.toThrow();
      expect(frame.rolls).toContain(roll);
    })

    it('throws an error if the frame is already complete', function() {
      let roll2 = { pins: 2 };
      let roll5 = { pins: 5 };
      frame.addRoll(roll2);
      frame.addRoll(roll5);

      expect(function() { frame.addRoll(roll2) }).toThrow();
      expect(frame._countRolls()).toEqual(2);
    })

    it('throws an error if the first roll pins + this roll is > 10 pins, and first roll was not a strike', function() {
      let roll7 = { pins: 7 };
      let roll5 = { pins: 5 };
      frame.addRoll(roll7);

      expect(function() { frame.addRoll(roll5) }).toThrow();
      expect(frame._countRolls()).toEqual(1);
    })
  })

  describe('#isComplete()', function() {
    it('returns false if the frame has <= 1 roll and < 10 pins', function() {
      let roll = { pins: 5 };
      frame.addRoll(roll);

      expect(frame.isComplete()).toEqual(false);
    })

    // Frames 1-9
    it('Frames 1-9: returns true if the frame has 2 rolls', function() {
      let roll = { pins: 3 };
      frame.addRoll(roll);
      frame.addRoll(roll);

      expect(frame.isComplete()).toEqual(true);
    })

    it('Frames 1-9: returns true if the frame has a strike (1 roll with 10 pins)', function() {
      let roll = { pins: 10 };
      frame.addRoll(roll);

      expect(frame.isComplete()).toEqual(true);
    })

    //  Frame 10
    it('Frame 10: returns false if the frame has 2 rolls with total pins = 10 (i.e. spare)', function() {
      frame = new Frame(10);
      let roll2 = { pins: 2 };
      let roll8 = { pins: 8 };
      frame.addRoll(roll2);
      frame.addRoll(roll8);

      expect(frame.isComplete()).toEqual(false);
    })

    it('Frame 10: returns false if number of rolls < 3 & first roll was a strike', function() {
      frame = new Frame(10);
      let roll10 = { pins: 10 };
      let roll8 = { pins: 8 };
      frame.addRoll(roll10);
      frame.addRoll(roll8);

      expect(frame.isComplete()).toEqual(false);
    })

    it('Frame 10: return true if the frame has 3 rolls', function() {
      frame = new Frame(10);
      let roll10 = { pins: 10 };
      let roll2 = { pins: 2 };
      frame.addRoll(roll10);
      frame.addRoll(roll2);
      frame.addRoll(roll2);

      expect(frame.isComplete()).toEqual(true);
    })
  })

  describe('#scoreFrame(nextFrame, nextNextFrame)', function() {
    it('STANDARD: returns the sum of roll 1 and roll 2 pins', function() {
      let roll3 = { pins: 3 };
      let roll5 = { pins: 5 };
      frame.addRoll(roll3);
      frame.addRoll(roll5);

      expect(frame.scoreFrame()).toEqual(8);
    })

    it('SPARE: returns the sum of total pins + pins of next roll, if given', function() {
      let nextFrame = new Frame(2);
      let roll2 = { pins: 2 };
      let roll8 = { pins: 8 };
      frame.addRoll(roll2);
      frame.addRoll(roll8);
      nextFrame.addRoll(roll2);
      nextFrame.addRoll(roll2);

      expect(frame.scoreFrame(nextFrame)).toEqual(12);
    })

    it('STRIKE: returns the sum of total pins + pins of next 2 rolls, if given', function() {
      let nextFrame = new Frame(2);
      let roll2 = { pins: 2 };
      let roll10 = { pins: 10 };
      frame.addRoll(roll10);
      nextFrame.addRoll(roll2);
      nextFrame.addRoll(roll2);

      expect(frame.scoreFrame(nextFrame)).toEqual(14);
    })

    it('returns false if the score cannot be calculated based on given rolls', function() {
      let nextFrame = new Frame(2);
      let roll10 = { pins: 10 };
      frame.addRoll(roll10);
      nextFrame.addRoll(roll10);

      expect(frame.scoreFrame(nextFrame)).toEqual(false);
    })
  })
})