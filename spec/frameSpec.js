"use strict";

describe('Frame', function(){
  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  describe('turns', function(){
    it('starts on the first ball', function(){
      expect(frame.isFirstBall).toEqual(true);
    })

    it("splits one frame into two balls", function(){
      expect(frame.isFirstBall).toEqual(true);
      frame.bowl();
      expect(frame.isFirstBall).toEqual(false);
      frame.bowl();
      expect(frame.isFirstBall).toEqual(true);
    });
  });

  describe('pins', function(){
    it('starts with a frame of zero pins knocked down', function(){
      expect(frame.pins).toEqual([0,0]);
    });

    it('adds the first ball pins to the frame total', function(){
      frame.pins = [null, 0]
      frame.bowl();
      expect(frame.pins[0]).not.toEqual(null)
      expect(frame.pins[0] + frame.pins[1]).toBeLessThan(11);
    });

    it('adds the second ball pins to the frame total', function(){
      frame.pins = [4, 0]
      frame.isFirstBall = false;
      spyOn(frame, "knockDownPins").and.returnValue(2);
      frame.bowl();
      expect(frame.pins[0] + frame.pins[1]).toEqual(6);
    });
  });



});
