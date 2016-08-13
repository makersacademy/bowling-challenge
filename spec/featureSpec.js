'use strict';

describe('Feature Test:', function() {
  var game;
  var frame;

  beforeEach(function() {
    game = new Game();
    frame = new Frame();
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
      it('Game knows when to record a spare bonus', function() {
        frame.roll(5);
        frame.roll(5);
        frame.addFrameToGame(game);
        expect(game.spareBonus).toBeTruthy();
      });

      it('Game knows when to record a strike bonus', function() {
        frame.roll(10);
        frame.addFrameToGame(game);
        expect(game.strikeBonus).toBeTruthy();
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
