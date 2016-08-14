'use strict';

describe('Feature Test:', function() {
  var game;
  var frame;
  var frame2;

  beforeEach(function() {
    game = new Game();
    frame = new Frame(1);
  });

  describe('Playing the game', function() {

    describe('can return the number of frames taken in the game', function() {
      it('after one frame', function() {
        frame.roll(2);
        frame.roll(2);
        frame.addFrameToGame(game);
        expect(game.getFrameCounter()).toEqual(1);
      });
    });

    describe('Bonuses', function() {
      beforeEach(function() {
        frame2 = new Frame(2);
      });

      describe('Spare', function() {
        beforeEach(function() {
          frame.roll(5);
          frame.roll(5);
          frame.addFrameToGame(game);
        });

        it('Game knows when to record a spare bonus', function() {
          expect(game.spareBonus).toBeTruthy();
        });

        it('can record the spare bonus to be added to the previous framescore', function() {
          frame2.roll(2);
          frame2.addBonus();
          expect(frame2.getBonusScore()).toEqual(2);
        });

        it('can add the spare bonus to the previous framescore', function() {
          frame2.roll(2);
          frame2.addBonus();
          frame2.addSpareBonusToGame(game);
          expect(game.frames[0]).toEqual(12);
        });
      });

      describe('Strike', function() {
        beforeEach(function() {
          frame.roll(10);
          frame.addFrameToGame(game);
        });

        it('Game knows when to record a strike bonus', function() {
          expect(game.strikeBonus).toBeTruthy();
        });

        it('can record the strike bonus to be added to the previous framescore', function() {
          frame2.roll(2);
          frame2.addBonus();
          frame2.roll(2);
          frame2.addBonus();
          expect(frame2.getBonusScore()).toEqual(4);
        });

        it('can add the strike bonus to the previous framescore', function() {
          frame2.roll(2);
          frame2.addBonus();
          frame2.roll(2);
          frame2.addBonus();
          frame2.addSpareBonusToGame(game);
          expect(game.frames[0]).toEqual(14);
        });

      });
    });

  });

  // describe('can calculate the total score', function() {
  //   it('after one frame', function() {
  //     frame.roll(2);
  //     frame.roll(2);
  //     expect(game.getScore()).toEqual(4);
  //   });
  // });

  // describe('can get a frame score from a roll', function() {
  //
  //   it('returns a frame score for the first roll', function() {
  //     expect(game.roll(1)).toBeGreaterThan(-1);
  //   });
  //
  //   it('returns a number for each roll', function() {
  //     expect(game.roll(7)).toEqual(7);
  //   });
  //
  //   it('returns a number of 10 or less for each roll', function() {
  //     expect(game.roll(11)).toThrow(new Error("Cannot bowl more than 10"));
  //   });
  // });
});
