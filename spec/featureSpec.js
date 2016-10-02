'use strict';

describe('Feature Test:', function() {
  var game;
  var frame;
  var frame2;

  beforeEach(function() {
    game = new Game();
    frame = new Frame();
  });

  describe('Playing the game', function() {

    describe('can return the number of frames taken in the game', function() {
      it('after one frame', function() {
        frame.roll(2);
        frame.roll(2);
        expect(game.getFrameCounter()).toEqual(1);
      });
    });

  //   describe('Bonuses', function() {
  //
  //     describe('Spare', function() {
  //       beforeEach(function() {
  //         frame.roll(5);
  //         frame.roll(5);
  //       });
  //
  //       it('Game knows when to record a spare bonus', function() {
  //         expect(game.spareBonus).toBeTruthy();
  //       });
  //
  //       it('can record the spare bonus to be added to the previous framescore', function() {
  //         frame.roll(2);
  //         frame.addBonus();
  //         expect(frame.getBonusScore()).toEqual(2);
  //       });
  //
  //       it('can add the spare bonus to the previous framescore', function() {
  //         frame.roll(2);
  //         frame.addBonus();
  //         expect(game.frames[0]).toEqual(12);
  //       });
  //     });
  //
  //     describe('Strike', function() {
  //       beforeEach(function() {
  //         frame.roll(10);
  //       });
  //
  //       it('Game knows when to record a strike bonus', function() {
  //         expect(game.strikeBonus).toBeTruthy();
  //       });
  //
  //       it('can record the strike bonus to be added to the previous framescore', function() {
  //         frame2.roll(2);
  //         frame2.addBonus();
  //         frame2.roll(2);
  //         frame2.addBonus();
  //         expect(frame2.getBonusScore()).toEqual(4);
  //       });
  //
  //       it('can add the strike bonus to the previous framescore', function() {
  //         frame2.roll(2);
  //         frame2.addBonus();
  //         frame2.roll(2);
  //         frame2.addBonus();
  //         frame2.addBonusToGame(game);
  //         expect(game.frames[0]).toEqual(14);
  //       });
  //
  //       it('can record the strike bonus to be added when first bonus roll is also a strike', function() {
  //       });
  //     });
  //   });
  });

  describe('can calculate the total score', function() {
    it('after one regular frame', function() {
      frame.roll(2);
      frame.roll(2);
      expect(game.getGameScore()).toEqual(4);
    });
  });
});
