describe("Feature Tests", function () {

  var pin, frame;

  beforeEach ( function () {
    pin = new Pin ();
  });

  // Frame switches if all pins hit or two rounds had

  it ("up frame if all pins hit", function () {
    expect(pin.frame.giveFrame()).toEqual(1);
    pin.pinsHit(pin._initialPinsThere);
    expect(pin.frame.giveFrame()).toEqual(2);
  });

  it("frame has maximum two rounds if not all pins hit", function () {
    expect(pin.frame.giveFrame()).toEqual(pin.frame._firstFrame);
    pin.pinsHit(0);
    pin.pinsHit(0);
    expect(pin.frame.giveFrame()).toEqual(pin.frame._firstFrame + 1);
  });

  it("new frame resets #pinsThere to default value", function () {
    pin.pinsHit(1);
    pin.pinsHit(1);
    expect(pin._pinsThere).toEqual(pin._initialPinsThere)
  });
});
