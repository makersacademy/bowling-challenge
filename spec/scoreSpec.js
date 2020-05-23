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

      expect(score.scoring(game)).toEqual(2)
      console.log(score.scoring(game))
    });
  });
});
