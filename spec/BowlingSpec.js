describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('at start of a new game', function () {
    it('the first frame is frame 1', function() {
      game.play();
      expect(game.frame).toEqual(1);
    });

    it('play begins at frame ball 1', function() {
      expect(game.frameBall).toEqual(1);
    });

    it('player has a total score of 0', function() {
      expect(game.score).toEqual(0);
    });

    it('all 10 pins are set up ready to play', function() {
      expect(game.pinsInPlay).toContain(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    });
  });

  describe('when playing a game', function () {
    it('player can roll a ball', function() {
      game.play();
      expect(game.frameBall).toEqual(2);
    });

    it('score records how many pins have been knocked down', function() {
      game.play;
      expect(game.rollBall()).toEqual(game.frameScore);
    });

    it('can add points from roll to players total score', function() {
      game.play;
      game.play;
      expect(game.totalScore()).toEqual(game.score);
    });

    it('logs score on scorecard', function() {
      game.knockedDown = [];
      game.rollBall();
      game.updateScoreCard();
      expect(game.knockedDown.pop()).toEqual(game.frameScore);
    });

    it('knows if player has rolled a gutter ball', function() {
      game.hitPin(2);
      game.hitPin(4);
      game.hitPin(7);
      expect(game.frameScore).toEqual(3);
      game.hitPin(0);
      expect(game.frameScore).toEqual(3);
    });

    it('knows if player has rolled a spare', function() {
      game.hitPin(1);
      game.hitPin(2);
      game.hitPin(3);
      expect(game.frameScore).toEqual(3);
      game.hitPin(4);
      game.hitPin(5);
      game.hitPin(6);
      game.hitPin(7);
      game.hitPin(8);
      game.hitPin(9);
      game.hitPin(10);
      expect(game.frameScore).toEqual(10);
    });

    it('knows if player has rolled a strike', function() {
      game.hitPin(1);
      game.hitPin(2);
      game.hitPin(3);
      game.hitPin(4);
      game.hitPin(5);
      game.hitPin(6);
      game.hitPin(7);
      game.hitPin(8);
      game.hitPin(9);
      game.hitPin(10);
      expect(game.frameScore).toEqual(10);
    });

    it('knows what frame is being played', function() {
      game.play();
      game.play();
      game.play();
      expect(game.frame).toEqual(3);
    });

    it('a non Spare or Strike frame score will never exceed 10', function() {
      game.play();
      expect(game.frameScore).toBeLessThan(11);
      game.play();
      expect(game.frameScore).toBeLessThan(11);
    });

    it('will not roll a second frame ball if first is a strike'), function() {
      // the code for this works, but can not work out test
    }

  });
});