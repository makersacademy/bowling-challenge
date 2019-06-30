describe('Bowling Game', function () {

  var game;

  beforeEach(function () {
    game = new BowlingGame;
  });

  describe('roll', function () {
    it('returns the number of pins knocked down', function () {
      for (var i = 0; i < 11; i++) {
        expect(game.roll(i)).toEqual(i);
      };
    });
  });

  describe('frame', function () {
    it('starts empty', function () {
      expect(game.frame).toEqual([]);
    });

    it('contains the number of pins knocked down by one roll', function () {
      game.roll(4);
      expect(game.frame).toEqual([4]);
    });

    it('contains the number of pins knocked down in two rolls', function () {
      game.roll(4);
      game.roll(3);
      expect(game.frame).toEqual([4, 3]);
    });
  });
});
