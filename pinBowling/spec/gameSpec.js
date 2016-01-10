describe(".Game", function () {

  var game, pin;

  beforeEach(function() {
    pin = jasmine.createSpyObj('pin', ['pinsHit', 'frame']);
    game = new Game (pin);
  });

  describe ('#score', function () {
    it ('has a default value', function () {
      expect(game.score).toEqual(game._DEFAULT_SCORE);
    });
    xit ('depends on number of pins hit', function () {

    });
  });

  describe ('#pinsHit', function () {
    it ('calls pinsHit on pin', function () {
      game.pinsHit(1);
      expect(pin.pinsHit).toHaveBeenCalledWith(1);
    });
  });

  describe ('frame property', function () {
    it ('gives frame property of pin', function () {
      expect(game.frame;).toBe(game.pin.frame);
    });
  });

});
