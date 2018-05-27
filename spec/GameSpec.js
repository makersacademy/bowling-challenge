describe ("Game", function() {

  var game

  beforeEach(function(){
    game = new Game();
  });

  describe('runFrame', function() {
    it('adds score to the frames', function() {
      game.runFrame([1,1]);
      expect(game.frames.length).toEqual(1);
    });

    it('sets final frame after 9 frames', function() {
      for (i = 0; i < 9; i++) {
        game.runFrame([1,1])
      }
      expect(game.finalFrame).toEqual(true);
    });
  });

  describe('score', function() {
    it('adds the scores together', function() {
      game.runFrame([1,1]);
      game.score(1);
      expect(game.frameScore).toEqual(2);
    });

    it('adds the next two bowls after a strike', function() {
      game.runFrame([10]);
      game.runFrame([1,1]);
      game.score(1);
      expect(game.frameScore).toEqual(12);
    })

    it('adds the next two bowls after a stike even if another is a stike', function() {
      game.runFrame([10]);
      game.runFrame([10]);
      game.runFrame([1,1]);
      game.score(1);
      expect(game.frameScore).toEqual(21);
    });

    it('adds the next bowl after a spare', function() {
      game.runFrame([4,6]);
      game.runFrame([1,1]);
      game.score(1);
      expect(game.frameScore).toEqual(11);
    });
  });
});
