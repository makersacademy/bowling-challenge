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

});
