// 'use strict';

describe('Game', () => {
  
  var game 
  
  beforeEach(function(){
    game = new Game
  })

  describe('Inital set up', () => {
    it('Starts with 21 zeros', () =>{
      expect(game.rolls).toEqual([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
      expect(game.currentRoll).toEqual(0)
    });
  });

  describe('Roll', () => {
    it('Pushes pin input into array', () => {
      expect(game.currentRoll).toEqual(0);
      game.roll(1);
      expect(game.rolls[0]).toEqual(1);
    });

    it('Increments this.currentRoll', () => {
      game.roll(1);
      //expect(game.rolls[0]).toEqual(1);
      expect(game.currentRoll).toEqual(1);    
    });
    
    it('Adds second roll to array', () => {
      game.roll(1);
      game.roll(1);
      expect(game.rolls[1]).toEqual(1);
    });

    it('Has max pin input of 10', () => {
      expect(game.roll(11)).toContain("Please choose number between 0 to 10.");
    });



    it("Cannot input more than 21 numbers", () => {
      for (var i = 1; i < 22; i++) {
        game.roll(1);
      }
      game.roll(9);
      expect(game.rolls.length).toEqual(21);
    });

    it("Adds 21 pin inputs", () => {
      for (var i = 1; i < 22; i++) {
        game.roll(9);
      }
      console.log(game.rolls);
      expect(game.rolls).toEqual([9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9])
      expect(game.rolls).not.toContain(0)
    })
  });
});