describe('BowlingGame', function() {
  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  it('starts with an empty scoreboard', function() {
    expect(game.scoreBoard).toEqual([]);
  });

  describe('.roll(pinNumber)', function() {
    it('logs rolls in the scoreBoard', function() {
      game.roll(2);
      expect(game.scoreBoard).toEqual([2]);
    });
  });


  describe('.score', function() {
    it('is 0 in case of gutter game', function() {
      for(var rollNumber = 0; rollNumber < 20; rollNumber ++) {
        game.roll(0);
      }
      expect(game.score()).toEqual(0);
    });

    it('is the sum of the single scores, if no strike or spare', function() {
      var scoreNumber = 0;
      for(var rollNumber = 0; rollNumber < 20; rollNumber ++) {
        pins = Math.floor(Math.random() * 5);
        scoreNumber += pins;
        game.roll(pins);
      }
      expect(game.score()).toEqual(scoreNumber);
    });

    it('detects spares', function() {
      game.roll(1);
      game.roll(9);
      game.roll(5);
      for(var i = 0; i < 17; i++ ){
        game.roll(0);
      }
      expect(game.score()).toEqual(20);
    });
  });

});
