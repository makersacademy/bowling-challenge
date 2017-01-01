// 'use strict';
//
// describe('Game', function() {
//   var game;
//
//   beforeEach(function() {
//     game = new Game();
//   });
//
//   // it('has a method for counting the frames in the game', function() {
//   //
//   // });
//
//   it('Adds the number from the first roll to the roll array', function() {
//     game.firstRoll(3);
//     expect(game._rolls).toEqual([3]);
//   });
//
//   it('Adds the number from the second roll to the roll array as well', function() {
//     game.firstRoll(3);
//     game.secondRoll(10);
//     expect(game._rolls).toEqual([3,10]);
//   });
//
//   it('Counts the number of pins knocked down by the first and second rolls', function() {
//     game.firstRoll(3);
//     game.secondRoll(4);
//     expect(game.individualFrame()).toEqual(7);
//   });
//
//   // it('Adds the individual frames to the _allTheFrames array to complete the game', function() {
//   // });
//
//   it('Checks whether the first roll resulted in a Strike', function() {
//     game.firstRoll(10);
//     expect(game.isStrike()).toBe(true);
//   });
//
//   it('Checks whether the first and second roll sums up to be a Spare', function() {
//     game.firstRoll(5);
//     game.secondRoll(5);
//     expect(game.isSpare()).toBe(true);
//   });
//
//   it('Checks whether the user scored an Open', function() {
//     game.firstRoll(4);
//     game.secondRoll(5);
//     expect(game.isOpen()).toBe(true);
//   });
// });
