'use strict';

describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe("addRoll", function() {
    it("can add a 1 point roll to the right bit", function() {
      frame.addRoll(1);
      frame.addRoll(2);
      expect(frame.firstRoll).toEqual(1);
      expect(frame.secondRoll).toEqual(2);
    })

    it("can tell if a strike was made", function() {
      frame.addRoll(10);
      expect(frame.special).toEqual('strike');
    })

    it("can tell if a spare was made", function() {
      frame.addRoll(6);
      frame.addRoll(4);
      expect(frame.special).toEqual('spare')
    })

    it("can tell if nothing special happened", function() {
      frame.addRoll(1);
      frame.addRoll(1);
      expect(frame.special).toBe(false);
    })
  });

  describe("isFinished", function() {
    it('can tell when a strike stops this frame', function() {
      frame.addRoll(10);
      expect(frame.isFinished).toBe(true);
    })

    it('can tell the frame is finished after two rolls', function() {
      frame.addRoll(2);
      expect(frame.isFinished).toBe(false)
      frame.addRoll(4);
      expect(frame.isFinished).toBe(true)
    });
  });

  describe("the Final Frame", function() {
    it('adds two scores of 1 and ends the frame', function() {
      frame.special = 'final'
      frame.addRoll(1);
      frame.addRoll(1);
      expect(frame.isFinished).toBe(true);
    });
  });
})
