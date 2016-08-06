'use strict';

describe('Feature Test:', function() {
  var game;
  var frame;

  beforeEach(function() {
    game = new Game();
    frame = new Frame();
  });

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
