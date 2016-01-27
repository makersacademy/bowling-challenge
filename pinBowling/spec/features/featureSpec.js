describe("Feature Tests", function () {

  var game, pin, frame;

  beforeEach ( function () {
    game = new Game ();
  });

  describe ('frames progress correctly', function () {
    it ("next frame if all pins hit", function () {
      expect(game.frame.giveFrame()).toEqual(1);
      game.pinsHit(game.pin._initialPinsThere);
      expect(game.frame.giveFrame()).toEqual(2);
    });

    it("maximum two rounds per frame", function () {
      expect(game.frame.giveFrame()).toEqual(game.frame._firstFrame);
      game.pinsHit(0);
      game.pinsHit(0);
      expect(game.frame.giveFrame()).toEqual(game.frame._firstFrame + 1);
    });

  });

  it("a new frame resets the number of pins to default", function () {
    game.pinsHit(1);
    game.pinsHit(1);
    expect(game.pin._pinsThere).toEqual(game.pin._initialPinsThere)
  });



describe ('number of frames is limited', function () {
  it('maximum of 10 frames normally', function () {
    game.pinsHit(10);
    game.pinsHit(10);
    game.pinsHit(10);
    game.pinsHit(10);
    game.pinsHit(10);
    game.pinsHit(10);
    game.pinsHit(10);
    game.pinsHit(10);
    game.pinsHit(10);
    game.pinsHit(1);
    game.pinsHit(8);
    expect(game.pinsHit(8)).toThrowError('No More Rounds')
  });
});

});
