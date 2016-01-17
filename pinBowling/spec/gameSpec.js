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
      game.pinsHit(1);
      expect(game.getScore()).toEqual(2);
    });

  });

  describe ('#pinsHit', function () {
    it ('calls pinsHit on pin', function () {
      game.pinsHit(1);
      expect(pin.pinsHit).toHaveBeenCalledWith(1);
    });

    it ('increments round if round 1', function () {
      expect(game._round).toEqual(1);
      game.pinsHit(1);
      expect(game._round).toEqual(2);
    });

    it ('resets round if round 2', function () {
      game.pinsHit(1);
      game.pinsHit(1);
      expect(game._round).toEqual(1);
    });

    it ('resets round if strike', function () {
      game.pinsHit(10);
      expect(game._round).toEqual(1);
    });

    describe ("when 'strike'", function () {
      it ('the bonus is the scores of the two subsequent rounds', function () {
        game.pinsHit(10);
        game.pinsHit(1);
        game.pinsHit(1);
        game.pinsHit(1);
        expect(game.getScore()).toEqual(15);
      });

      it ('the bonus is as expected with two strikes in row', function () {
        game.pinsHit(10);
        game.pinsHit(10);
        game.pinsHit(1);
        game.pinsHit(1);
        game.pinsHit(1);
        expect(game.getScore()).toEqual(36);
      });
    });

    describe ("when 'spare'", function () {
      it ('the bonus is the score of the next roll', function () {
        game.pinsHit(1);
        game.pinsHit(9);
        game.pinsHit(1);
        game.pinsHit(2);
        expect(game.getScore()).toEqual(14);
      });
      it ('the bonus only occurs using sum of two rounds', function () {
        game.pinsHit(1);
        game.pinsHit(9);
        game.pinsHit(1);
        game.pinsHit(2);
        game.pinsHit(8);
        game.pinsHit(1);
        expect(game.getScore()).toEqual(23);
      });
    });
  });



});
