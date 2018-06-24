describe('Game', () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });


  describe('bowl', () => {
    it('adds score to the current frame', () => {
      game.bowl(1);
      expect(game.frame[0]).toEqual(1);
    });

    it('adds score to the frames', () => {
      game.bowl(1);
      game.bowl(1);
      expect(game.frames[0]).toEqual([1, 1]);
    });

    it('reduce the nuber of pins by the score', () => {
      game.bowl(4);
      expect(game.pins).toEqual(6);
    });

    it('throws an error if score is too high', () => {
      expect(() => { game.bowl(11); }).toThrowError('please enter a valid score');
    });
  });

  describe('score', () => {
    it('adds the scores together', () => {
      game.bowl(1);
      game.bowl(1);
      expect(game.score(1)).toEqual(2);
    });

    it('scores 0 for frame which has not started', () => {
      expect(game.score(2)).toEqual(0);
    });

    it('adds the next two bowls after a strike', () => {
      game.bowl(10);
      game.bowl(1);
      game.bowl(1);
      expect(game.score(1)).toEqual(12);
    });

    it('adds the next two bowls after a stike even if another is a stike', () => {
      game.bowl(10);
      game.bowl(10);
      game.bowl(1);
      game.bowl(1);
      expect(game.score(1)).toEqual(21);
    });

    it('adds the next bowl after a spare', () => {
      game.bowl(6);
      game.bowl(4);
      game.bowl(1);
      game.bowl(1);
      expect(game.score(1)).toEqual(11);
    });

    it('returns the current frame if frame is not complete', () => {
      game.bowl(2);
      expect(game.score(1)).toEqual(2);
    });

    it('returns 10 after a strike and no further frames are played', () => {
      game.bowl(10);
      expect(game.score(1)).toEqual(10);
    });

    it('returns the total score', () => {
      game.bowl(10);
      game.bowl(4);
      game.bowl(1);
      game.bowl(1);
      expect(game.score(10)).toEqual(21);
    });

    describe('ninthframe', () => {
      beforeEach(() => {
        for (i = 0; i < 16; i += 1) {
          game.bowl(1);
        }
      });

      it('scores the 9th frame correctly if there is a strike', () => {
        game.bowl(10);
        game.bowl(4);
        game.bowl(4);
        expect(game.score(9)).toEqual(34);
      });

      it('scores the 9th frame correctly if there is a strike on strike', () => {
        game.bowl(10);
        game.bowl(10);
        game.bowl(4);
        game.bowl(4);
        expect(game.score(9)).toEqual(40);
      });

      it('scores the 9th frame correctly if there is a turkey', () => {
        game.bowl(10);
        game.bowl(10);
        game.bowl(10);
        game.bowl(10);
        expect(game.score(9)).toEqual(46);
      });

      it('scores the 9th frame correctly if there is a spare', () => {
        game.bowl(5);
        game.bowl(5);
        game.bowl(4);
        game.bowl(4);
        expect(game.score(9)).toEqual(30);
      });
    });
  });

  describe('finalframe', () => {
    beforeEach(() => {
      for (i = 0; i < 18; i += 1) {
        game.bowl(1);
      }
    });
    it('sets final frame after 9 frames', () => {
      expect(game.finalFrame).toEqual(true);
    });


    it('does not ends the turn after a stike', () => {
      game.bowl(10);
      expect(game.finish).toEqual(false);
    });

    it('does not end the turn after 2 strikes', () => {
      game.bowl(10);
      game.bowl(10);
      expect(game.finish).toEqual(false);
    });

    it('ends the turn after two bowls', () => {
      game.bowl(4);
      game.bowl(4);
      expect(game.finish).toEqual(true);
    });

    it('ends the turn after 3 turns', () => {
      game.bowl(10);
      game.bowl(4);
      game.bowl(4);
      expect(game.finish).toEqual(true);
    });

    it('does not end the turn after a spare', () => {
      game.bowl(5);
      game.bowl(5);
      expect(game.finish).toEqual(false);
    });

    it('ends the turn after a spare and one more bowl', () => {
      game.bowl(5);
      game.bowl(5);
      game.bowl(5);
      expect(game.finish).toEqual(true);
    });

    it('ends the turn after 3 strikes', () => {
      game.bowl(10);
      game.bowl(10);
      game.bowl(10);
      expect(game.finish).toEqual(true);
    });

    it('does not end the turn after one bowl', () => {
      game.bowl(4);
      expect(game.finish).toEqual(false);
    });

    it('throws an error if the turn is over', () => {
      game.bowl(2);
      game.bowl(2);
      expect(() => { game.bowl(4); }).toThrowError('Game has finished, start a new game');
    });

    it('adds to the score after one bowl', () => {
      game.bowl(4);
      expect(game.score(10)).toEqual(22);
    });

    it('adds to the score after two bowls', () => {
      game.bowl(4);
      game.bowl(4);
      expect(game.score(10)).toEqual(26);
    });

    it('scores correctly after a spare', () => {
      game.bowl(5);
      game.bowl(5);
      game.bowl(5);
      expect(game.score(10)).toEqual(33);
    });

    it('scores correctly after a strike', () => {
      game.bowl(10);
      game.bowl(4);
      game.bowl(4);
      expect(game.score(10)).toEqual(36);
    });

    it('scores correctly after two strikes', () => {
      game.bowl(10);
      game.bowl(10);
      game.bowl(4);
      expect(game.score(10)).toEqual(42);
    });

    it('scores correctly after 2 bowls in incomplete final frame', () => {
      game.bowl(10);
      game.bowl(10);
      expect(game.score(10)).toEqual(38);
    });
  });

  describe('total', () => {
    it('scores a perfect game', () => {
      for (i = 0; i < 12; i += 1) {
        game.bowl(10);
      }
      expect(game.score(10)).toEqual(300);
    });

    it('scores a gutter game', () => {
      for (i = 0; i < 20; i += 1) {
        game.bowl(0);
      }
      expect(game.score(10)).toEqual(0);
    });
  });
});
