describe("Feature Tests", function () {

  var game, pin, frame;

  beforeEach ( function () {
    game = new Game ();
  });

  it ("next frame if all pins hit", function () {
    expect(game.pin.frame.giveFrame()).toEqual(1);
    game.pin.pinsHit(game.pin._initialPinsThere);
    expect(game.pin.frame.giveFrame()).toEqual(2);
  });

  it("maximum two rounds per frame", function () {
    expect(game.pin.frame.giveFrame()).toEqual(game.pin.frame._firstFrame);
    game.pin.pinsHit(0);
    game.pin.pinsHit(0);
    expect(game.pin.frame.giveFrame()).toEqual(game.pin.frame._firstFrame + 1);
  });

  it("a new frame resets the number of pins to default", function () {
    game.pin.pinsHit(1);
    game.pin.pinsHit(1);
    expect(game.pin._pinsThere).toEqual(game.pin._initialPinsThere)
  });
});
