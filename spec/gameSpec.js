describe('Game',function () {
  var game, frame;

  beforeEach(function () {
      game = new Game();
      game.rollNtimes = function (n, knockOver) {
        for (var i = 0; i < n; i++) {
          game.roll(knockOver);
        }
      };
  });

  describe('._setup',function () {
    it('adds all the frames to the game',function () {
      expect(game.frames.length).toEqual(10);
    });

    it('sets the current frame',function () {
      expect(game.currentFrame).toEqual(game.frames[0]);
    });
  });

  describe('.roll',function () {
    it('it records what a player rolled in a frame',function () {
      spyOn(game.currentFrame, 'roll');
      game.roll(8);
      expect(game.currentFrame.roll).toHaveBeenCalled();
    });

    it('changes frame when a current frame is over',function () {
      game.roll(8);
      game.roll(1);
      expect(game.currentFrame.number).toEqual(1);
    });

    it('changes frame when a you roll a stike',function () {
      game.roll(10);
      expect(game.currentFrame.number).toEqual(1);
    });
  });

  describe('.score',function () {
    it('it starts out as zero',function () {
      expect(game.score()).toEqual(0);
    });

    it('it adds up the scores from all the frames',function () {
      game.roll(8);
      game.roll(1);
      expect(game.score()).toEqual(9);
    });

    it('adds bonuses to the frames when there is a strike',function () {
      game.roll(10);
      game.roll(8);
      game.roll(2);
      expect(game.score()).toEqual(10 + 8 + 2 + 8 + 2);
    });

    it('adds bonuses when there is a spare',function () {
      game.roll(8);
      game.roll(2);
      game.roll(2);
      game.roll(8);
      expect(game.score()).toEqual(8 + 2 + 2 + 2 + 8);
    });

    it('adds bonuses when there is a spare',function () {
      game.roll(8);
      game.roll(2);
      game.roll(2);
      game.roll(8);
      expect(game.score()).toEqual(8 + 2 + 2 + 2 + 8);
    });
  });

  describe('.isOver',function () {
    it('does not start over',function () {
      expect(game.isOver).toBe(false);
    });

    describe('Perfect Game',function () {
      beforeEach(function () {
        game.rollNtimes(12,10);
      });

      it('gives the player the maximum points possible',function () {
        expect(game.score()).toEqual(300);
      });

      it('ends at after the last frame',function () {
        expect(game.isOver).toBe(true);
      });
    });

    describe('Gutter Game',function () {
      it('gives the player the minimum possible points',function () {
        game.rollNtimes(20,0);
        expect(game.score()).toEqual(0);
      });
    });
  });
});
