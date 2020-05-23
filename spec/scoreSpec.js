'use strict';

console.log("I AM IN THE SPEC!")

describe('Score', () => {

  var score 
  var game 

  beforeEach(function(){
    score = new Score
    game = new Game // How to spy this? 
  });

  describe("Scoring function", () => {
    it('Keeps a running score', () => {
      game.roll(1);
      game.roll(1);
      game.roll(1);

      expect(score.scoring(game)).toEqual(3)
    });

    it('Has a strike bonus', () => {
      game.roll(1);
      game.roll(1);
      game.roll(10);
      game.roll(2);
      game.roll(2);

      expect(score.scoring(game)).toEqual(20)
    });

    it('Has a spare bonus', () => {
      game.roll(1);
      game.roll(1);
      game.roll(8);
      game.roll(2);
      game.roll(1);
      game.roll(1);

      expect(score.scoring(game)).toEqual(15)
    });
  });
});
