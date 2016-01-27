describe(".Pin", function () {

  var frame, pin;

  beforeEach ( function () {
    'use strict';
    frame = jasmine.createSpyObj('frame', ['upFrameOrRound', 'upFrame']);
    pin = new Pin (frame);
  });

  describe ("#reset", function () {
    it ("resets number of pins to initial value", function () {
      pin.pinsHit();
      pin.reset();
      expect(pin._pinsThere).toEqual(pin._initialPinsThere);
    });
  });

  describe ("#pinsHit", function () {
    it ("returns number given as argument", function () {
      expect(pin.pinsHit(1)).toEqual(1);
    });

    it ("throws error when submitting above number of pins there", function () {
      expect(function () {pin.pinsHit(pin._pinsThere + 1)})
      .toThrow('cannot exceed pin number');
    });

    it ("reduces pins there", function () {
      pin.pinsHit(5);
      expect(pin._pinsThere).toEqual(pin._initialPinsThere - 5);
    });

    it ("#upFrameOrRound called on frame", function () {
      pin.pinsHit(1);
      expect(frame.upFrameOrRound).toHaveBeenCalledWith(pin);
    });

    describe ("when all pins taken out in one shot, 'strike'", function () {
      it ("#upFrame called on frame", function () {
        pin.pinsHit(pin._initialPinsThere);
        expect(frame.upFrame).toHaveBeenCalledWith(pin);
      });

    });

  });

});
