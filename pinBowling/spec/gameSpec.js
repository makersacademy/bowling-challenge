describe(".Game", function () {

  var game, pin;

  beforeEach(function() {
    pin = jasmine.createSpyObj('pin', ['pinsHit'])
    game = new Game (pin);
  });

  describe ('#pinsHit', function () {
    it ('calls pinsHit on pin', function () {
      game.pinsHit(1);
      expect(pin.pinsHit).toHaveBeenCalledWith(1);
    });
  });

});
