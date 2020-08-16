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
      game.bowlFrame(3,4)
      expect(game.showScore()).toEqual(7);
    });
    it('Score adds up more than 1 frame', function() {
      game.bowlFrame(1,1)
      game.bowlFrame(3,4)
      expect(game.showScore()).toEqual(9);
    })
    it('Score adds next roll to score, after getting spare', function() {
      game.bowlFrame(3,7)
      game.bowlFrame(5,1)
      expect(game.showScore()).toEqual(21);
    })
    it('Score saves previous roll as a spare, takes this into account when scoring', function() {
      game.bowlFrame(1,9)
      game.bowlFrame(8,1)
      expect(game.showScore()).toEqual(27)
    })
    it('Score saves previous roll as a strike, next two rolls are added to that score', function() {
      game.bowlFrame(10,0)
      game.bowlFrame(2,4)
      expect(game.showScore()).toEqual(22)
    })
  });

  describe('frame', function() {
    it('A user can bowl a whole frame', function() {
      game.bowlFrame(3, 4)
      expect(game.frame).toEqual([3,4])
    });
    it('A user can bowl more than one frame', function() {
      game.bowlFrame(1,1)
      game.bowlFrame(3,4)
      expect(game.frame).toEqual([3,4])
    })
    it('A user can bowl 10 frames after this its the end', function() {
      manyFrames();
      expect(function() { game.bowlFrame(2,2); }).toThrowError('game over');
      expect(game.showScore()).toEqual(40);
    })
    it('A player can roll a spare, the status of that roll is made a spare', function() {
      game.bowlFrame(3,7)
      expect(game.lastFrameStatus).toEqual("spare")
    })
    it('A player can roll a strike, the status of that roll is made a strike', function() {
      game.bowlFrame(10,0)
      expect(game.lastFrameStatus).toEqual("strike")
    })
  });

  function manyFrames() {
    for (var i = 0; i < 10; i++) {
      game.bowlFrame(2,2);
    };
  };
});
