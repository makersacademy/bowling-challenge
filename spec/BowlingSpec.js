describe ("Game", function() {

  var game

  beforeEach(function(){
    game = new Game();
  });


  describe('bowl', function() {
    it('adds score to the current frame', function() {
      game.bowl(1);
      expect(game.frame[0]).toEqual(1);
    })

    it('adds score to the frames', function() {
      game.bowl(1);
      game.bowl(1);
      expect(game.frames[0]).toEqual([1,1]);
    });

    it('reduce the nuber of pins by the score', function() {
      game.bowl(4);
      expect(game.pins).toEqual(6);
    })

    it('throws an error if score is too high', function() {
      expect( function(){ game.bowl(11); } ).toThrow("please enter a valid score");
    });
  });

  describe('score', function() {
    it('adds the scores together', function() {
      game.bowl(1);
      game.bowl(1);
      expect(game.score(1)).toEqual(2);
    });

    it('adds the next two bowls after a strike', function() {
      game.bowl(10);
      game.bowl(1);
      game.bowl(1);
      expect(game.score(1)).toEqual(12);
    })

    it('adds the next two bowls after a stike even if another is a stike', function() {
      game.bowl(10);
      game.bowl(10);
      game.bowl(1);
      game.bowl(1);
      expect(game.score(1)).toEqual(21);
    });

    it('adds the next bowl after a spare', function() {
      game.bowl(6);
      game.bowl(4);
      game.bowl(1);
      game.bowl(1);
      expect(game.score(1)).toEqual(11);
    });

    it('returns the current frame if frame is not complete', function() {
      game.bowl(2);
      expect(game.score(1)).toEqual(2);
    });

    it('returns 10 after a strike and no further frames are played', function() {
      game.bowl(10);
      expect(game.score(1)).toEqual(10);
    });

      describe('ninthframe', function() {

        beforeEach(function(){
          for (i = 0; i < 16; i++) {
            game.bowl(1)
          };
        });

        it('scores the 9th frame correctly if there is a strike', function() {
          game.bowl(10);
          game.bowl(4);
          game.bowl(4);
          expect(game.score(9)).toEqual(18);
        });

        it('scores the 9th frame correctly if there is a strike on strike', function() {
          game.bowl(10);
          game.bowl(10);
          game.bowl(4);
          game.bowl(4);
          expect(game.score(9)).toEqual(24);
        });

        it('scores the 9th frame correctly if there is a turkey', function() {
          game.bowl(10);
          game.bowl(10);
          game.bowl(10);
          game.bowl(10);
          expect(game.score(9)).toEqual(30);
        });

        it('scores the 9th frame correctly if there is a spare', function() {
          game.bowl(5);
          game.bowl(5);
          game.bowl(4);
          game.bowl(4);
          expect(game.score(9)).toEqual(14);
        });

      });
    });

  describe('finalframe', function() {

    beforeEach(function(){
      for (i = 0; i < 18; i++) {
        game.bowl(1)
      }
    });
    it('sets final frame after 9 frames', function() {
      expect(game.finalFrame).toEqual(true);
    });


    it('does not ends the turn after a stike', function() {
      game.bowl(10);
      expect(game.finish).toEqual(false);
    });

    it('does not end the turn after 2 strikes', function() {
      game.bowl(10);
      game.bowl(10);
      expect(game.finish).toEqual(false);
    })

    it('ends the turn after two bowls', function() {
      game.bowl(4);
      game.bowl(4);
      expect(game.finish).toEqual(true);
    });

    it('ends the turn after 3 turns', function() {
      game.bowl(10);
      game.bowl(4);
      game.bowl(4);
      expect(game.finish).toEqual(true);
    });

    it('does not end the turn after a spare', function() {
      game.bowl(5);
      game.bowl(5);
      expect(game.finish).toEqual(false);
    });

    it('ends the turn after a spare and one more bowl', function() {
      game.bowl(5);
      game.bowl(5);
      game.bowl(5);
      expect(game.finish).toEqual(true);
    });

    it('ends the turn after 3 strikes', function() {
      game.bowl(10);
      game.bowl(10);
      game.bowl(10);
      expect(game.finish).toEqual(true);
    })

    it('does not end the turn after one bowl', function() {
      game.bowl(4);
      expect(game.finish).toEqual(false);
    });

    it('throws an error if the turn is over', function() {
      game.bowl(2);
      game.bowl(2);
      expect( function(){ game.bowl(4); } ).toThrow("Game has finished, start a new game");
    });

    it('adds to the score after one bowl', function() {
      game.bowl(4);
      expect(game.score(10)).toEqual(4);
    });

    it('adds to the score after two bowls', function() {
      game.bowl(4);
      game.bowl(4);
      expect(game.score(10)).toEqual(8);
    });

    it('scores correctly after a spare', function() {
      game.bowl(5);
      game.bowl(5);
      game.bowl(5);
      expect(game.score(10)).toEqual(15);
    });

    it('scores correctly after a strike', function() {
      game.bowl(10);
      game.bowl(4);
      game.bowl(4);
      expect(game.score(10)).toEqual(18);
    });

    it('scores correctly after two strikes', function() {
      game.bowl(10);
      game.bowl(10);
      game.bowl(4);
      expect(game.score(10)).toEqual(24);
    })
  });

  describe('total', function() {
    it('scores a perfect game', function() {
      for (i = 0; i < 12; i++) {
        game.bowl(10)
      }
      expect(game.total()).toEqual(300);
    });

    it('scores a gutter game', function() {
      for (i = 0; i < 20; i++) {
        game.bowl(0)
      }
      expect(game.total()).toEqual(0);
    })
  });
});
