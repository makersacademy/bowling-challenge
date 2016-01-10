describe(".Game", function () {

  var game, pin;

  beforeEach( function() {
    pin = jasmine.createSpyObj('pin', ['pinsHit', 'frame']);
    game = new Game (pin);
  });

  describe ('#getScore', function () {
    it ('has a default value', function () {
      expect(game.getScore()).toEqual(game._DEFAULT_SCORE);
    });

    it ('depends on number of pins hit', function () {
      game.pinsHit(1);
      expect(game.getScore()).toEqual(1);
    });

  });

  describe ('#pinsHit', function () {
    it ('calls pinsHit on pin', function () {
      game.pinsHit(1);
      expect(pin.pinsHit).toHaveBeenCalledWith(1);
    });

    describe ("when 'strike'", function () {
      it ('the bonus is the scores of the two subsequent rounds', function () {
        game.pinsHit(game._initialPinsThere);
        game.pinsHit(1);
        game.pinsHit(1);
        expect(game.getScore()).toEqual(game._initialPinsThere + 4);
      });
    });
  });

});
