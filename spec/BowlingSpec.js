'use strict';

 describe('Bowling', function() {
   var game;

   beforeEach(function() {
     game = new Bowling();
   });

   it('starts with a new scorecard', function() {
     expect(game.getScoreboard()).not.toEqual(null);
   });

   it('player has not yet bowled', function () {
     expect(game.getCurrentRoll()).not.toEqual(null);
   });

 });
