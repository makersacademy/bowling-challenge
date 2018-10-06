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

  describe('#score', function() {
    it('can roll a total score for 20 bowls', function () {
      for (var i = 0; i < 20; i++) {
        game.roll(2);
      }
      expect(game.score()).toEqual(40);
    });
    it('rolling a gutter score', function () {
      for (var i = 0; i < 20; i++) {
        game.roll(0);
      }
      expect(game.score()).toEqual(0);
    });
  })

});
