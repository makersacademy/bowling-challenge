describe ('Game', function () {

  var game;

  beforeEach(function () {

    game = new Game
    frame = new Frame

    });

    describe ('Scoring', function () {
      it ('returns 0 for a gutter game', function() {
        for (var i = 0; i < 10; i++) {
          game.frameScores.push(0);
        }
        expect(game.getScore()).toEqual(0);
      });


      it ('returns 20 for a game of 1s', function() {
        for (var i = 0; i < 10; i++) {
          game.frameScores.push(2);
        }
        expect(game.getScore()).toEqual(20);
      });

  });
});
