'use strict';

describe('Bowlng', function() {
  var game;
  beforeEach(function() {
    game = new Bowling();
  });

  // it('can add a roll', function() {
  //   game.addRoll(0);
  //   game.addRoll(0);
  //   expect(game.returnRolls()[0][0]).toEqual(0);
  // });
  //
  // it('returns 0 for a gutter game', function() {
  //   for (var i=0; i<20; i++) {
  //     game.addRoll(0);
  //   };
  //   expect(game.score()).toEqual(0);
  // });
  //
  // describe('spares', function() {
  //   it('returns 20 for three rolls of 5 and 0 elsewhere', function() {
  //     for (var i=0; i<3; i++) {
  //       game.addRoll(5);
  //     };
  //     for (var j=0; j<17; j++) {
  //       game.addRoll(0);
  //     };
  //
  //     expect(game.score()).toEqual(20);
  //   });
  //
  //   it('returns 22 for 7, 3, 2, 8, and 0 elsewhere', function() {
  //     game.addRoll(7);
  //     game.addRoll(3);
  //     game.addRoll(2);
  //     game.addRoll(8);
  //     for (var i=0; i<16; i++) {
  //       game.addRoll(0);
  //     };
  //
  //     expect(game.score()).toEqual(22);
  //   });
  // });

  describe('strikes', function() {
    // it('returns 28 for 10, 5, 4, and 0 elsewhere', function() {
    //   game.addRoll(10);
    //   game.addRoll(5);
    //   game.addRoll(4);
    //   for (var i=0; i<16; i++) {
    //     game.addRoll(0);
    //   };
    //
    //   expect(game.score()).toEqual(28);
    // });
    //
    // it('returns 31 for 4, 3, 10, 7, and 0 elsewhere', function() {
    //   game.addRoll(4);
    //   game.addRoll(3);
    //   game.addRoll(10);
    //   game.addRoll(7);
    //   for (var i=0; i<16; i++) {
    //     game.addRoll(0);
    //   };
    //
    //   expect(game.score()).toEqual(31)
    // });

    it('returns 50 for 10, 10, 2, 7, and 0 elsewhere', function() {
      game.addRoll(10);
      game.addRoll(10);
      game.addRoll(2);
      game.addRoll(7);
      for (var i=0; i<16; i++) {
        game.addRoll(0);
      };

      expect(game.score()).toEqual(50)
    });
  });
});
