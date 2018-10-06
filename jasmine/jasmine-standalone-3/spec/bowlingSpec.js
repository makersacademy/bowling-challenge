describe ('Bowling game', function () {

  var game;

  beforeEach(function () {
    game = new Bowling();
  });

  describe('#roll', function() {
    it ('bowls a ball', function () {
      expect(game.roll(5)).toEqual([5]);
    });
  });

  describe('#getSum', function () {
    it ('sums the score so far', function () {
      game.roll(6);
      expect(game.roll(3)).toEqual(9);
    });
  });

});
