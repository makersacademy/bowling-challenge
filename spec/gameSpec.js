describe('Bowling', function() {
  var game;
  beforeEach(function() {
    game = new Game();
  });

  describe('score', function() {
    it('Score begins at 0', function() {
      expect(game.showScore()).toEqual(0);
    });
    it('Score can increase after a frame', function() {
      game.bowlFrame(3,4);
      expect(game.showScore()).toEqual(7);
    });
    it('Score adds up more than 1 frame', function() {
      game.bowlFrame(1,1)
      game.bowlFrame(3,4)
      expect(game.showScore()).toEqual(9);
    })
  });

  describe('frame', function() {
    it('A user can bowl a whole frame', function() {
      expect(game.bowlFrame(3, 4)).toEqual([3,4]);
    });
    it('A user can bowl more than one frame', function() {
      game.bowlFrame(1,1)
      game.bowlFrame(3,4)
      expect(game.bowlFrame(4,5)).toEqual([4,5])
    })
    it('A user can bowl 10 frames after this its the end', function() {
      manyFrames();
      expect(function() { game.bowlFrame(2,2); }).toThrowError('game over');
      expect(game.showScore()).toEqual(40);
    })
  });
  function manyFrames() {
    for (var i = 0; i < 10; i++) {
      game.bowlFrame(2,2);
    };
  };
});
