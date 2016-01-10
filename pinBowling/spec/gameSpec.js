describe (".Game", function () {

  var game, pin;

  beforeEach (function () {
    frame = jasmine.createSpy ('frame')
    pin = jasmine.createSpyObj('pin', ['pinsHit']);
    game = new Game (pin, frame);
  });

  describe ("#pinsHit", function () {
    it ("calls #pinsHit on pin and frame", function () {
      game.pinsHit(1);
      expect(pin.pinsHit).toHaveBeenCalledWith(1, frame);
    });
  });
});
