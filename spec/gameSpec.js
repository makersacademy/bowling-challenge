'use strict';

describe('Game', () => {
  
  var game = new Game
  
  describe('Inital set up', () => {
    it('Starts with 21 zeros', () =>{
      expect(game.rolls).toEqual([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
      expect(game.currentRoll).toEqual(0)
    });
  });

  describe('Roll', () => {
    it('Pushes pin input into array', () => {
      game.roll(1);
      expect(game.rolls[0]).toEqual(1)
    })
  })
});