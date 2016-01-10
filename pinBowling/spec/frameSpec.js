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
      frame.upFrame();
      expect(frame.giveFrame()).toEqual(frame._firstFrame + 1);
    });
    it ("resets the round number", function () {
      frame.upFrameOrRound();
      frame.upFrame();
      expect(frame.giveRound()).toEqual(frame._initialRound);
    });
    it ("causes pin number to be #reset", function () {
      frame.upFrame();
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
      frame.upFrameOrRound();
      expect(frame.giveRound()).toEqual(frame._initialRound + 1);
    });

    it ("increments the frame when second round", function () {
      frame.upFrameOrRound();
      frame.upFrameOrRound();
      expect(frame.giveFrame()).toEqual(frame._firstFrame + 1);
    });

  });

});
