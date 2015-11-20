describe('Bowling Game Features', function() {
  var game;
  var perfectGame;
  var gutterGame;
  var exampleGame1;
  var exampleGame2;
  var exampleGame3;

  beforeEach(function() {
    perfectGame = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
    gutterGame = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
    exampleGame1 = [ 9, 0, 3, 7, 6, 1, 3, 7, 8, 1, 5, 5, 0, 10, 8, 0, 7, 3, 8, 2, 8 ];
    exampleGame2 = [ 10, 3, 7, 6, 1, 10, 10, 10, 2, 8, 9, 0, 7, 3, 10, 10, 10];
    exampleGame3 = [ 9, 0, 3, 5, 6, 1, 3, 6, 8, 1, 5, 3, 2, 5, 8, 0, 7, 1, 8, 1 ];
    game = new Game();
  });

  describe('allows to play a normal game', function() {
    it('exampleGame1', function() {
      exampleGame1.forEach(function(ball) {
        game.roll(ball);
      });
      expect(game.score()).toEqual(131);
    })

    it('exampleGame2', function() {
      exampleGame1.forEach(function(ball) {
        game.roll(ball);
      });
      expect(game.score()).toEqual(193);
    })

    it('exampleGame3', function() {
      exampleGame1.forEach(function(ball) {
        game.roll(ball);
      });
      expect(game.score()).toEqual(82);
    })
  });

  describe('allows to play exceptional games', function() {
    it('perfectGame', function() {
      perfectGame.forEach(function(ball) {
        game.roll(ball);
      });
      expect(game.score()).toEqual(300);
    });

    it('gutterGame', function() {
      gutterGame.forEach(function(ball) {
        game.roll(ball);
      });
      expect(game.score()).toEqual(0);
    });
  })
});
