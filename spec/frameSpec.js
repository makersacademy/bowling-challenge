'use strict';

describe('Frame', function() {
  let frame;

  beforeEach(function() {
    frame = new Frame(1);
  });

  // Frames 1-9
  describe('addRoll(roll)', function() {

    it("adds the given roll to the frame's rolls", function() {
      let roll = { pins: 3 };
      frame.addRoll(roll);

      expect(frame.rolls).toContain(roll);
    })

    it('allows a second roll when the first roll has < 10 pins & total pins of both rolls is <= 10', function() {
      let roll = { pins: 3 };
      frame.addRoll(roll);

      expect(function() { frame.addRoll(roll) }).not.toThrow();
    })

    it('throws an error if the frame already has 2 rolls', function() {
      let roll = { pins: 3 };
      frame.addRoll(roll);
      frame.addRoll(roll);

      expect(function() { frame.addRoll(roll) }).toThrow();
    })

    it('throws an error if the first roll had 10 pins', function() {
      let roll10 = { pins: 10 };
      let roll3 = { pins: 3 };
      frame.addRoll(roll10);

      expect(function() { frame.addRoll(roll3) }).toThrow();
    })

    it('throws an error if the sum of the frame roll + this roll would be > 10 pins', function() {
      let roll7 = { pins: 7 };
      let roll5 = { pins: 5 };
      frame.addRoll(roll7);

      expect(function() { frame.addRoll(roll5) }).toThrow();
    })

  })


})