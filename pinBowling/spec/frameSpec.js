describe(".Frame", function () {

  var frame, pin;

  beforeEach ( function () {
    'use strict';
    frame = new Frame ();
    pin = jasmine.createSpyObj('pin', ['reset']);
  });

  describe ("#giveFrame", function () {
    it ("game begins at first frame", function () {
      expect(frame.giveFrame()).toEqual(frame._firstFrame);
    });

  });

  describe ("#upFrame", function () {
    it ("increments the frame number", function () {
      frame.upFrame(pin);
      expect(frame.giveFrame()).toEqual(frame._firstFrame + 1);
    });

    it ("resets the round number", function () {
      frame.upFrameOrRound(pin);
      frame.upFrame(pin);
      expect(frame.giveRound()).toEqual(frame._initialRound);
    });

    it ("causes pin number to be #reset", function () {
      frame.upFrame(pin);
      expect(pin.reset).toHaveBeenCalled();
    });

  });

  describe ("#giveRound", function () {
    it ("has default value", function () {
      expect(frame.giveRound()).toEqual(frame._initialRound);
    });

  });

  describe ("#upFrameOrRound", function () {
    it ("increments the round when first round", function () {
      frame.upFrameOrRound(pin);
      expect(frame.giveRound()).toEqual(frame._initialRound + 1);
    });

    it ("increments the frame when second round", function () {
      frame.upFrameOrRound(pin);
      frame.upFrameOrRound(pin);
      expect(frame.giveFrame()).toEqual(frame._firstFrame + 1);
    });

  });

});
