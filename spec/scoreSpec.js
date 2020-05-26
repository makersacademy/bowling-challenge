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

    it("Has 10th frame bonus for strike",() => {
      for (var i = 0; i < 22; i++) {
        game.roll(10);
      }

      expect(score.scoring(game)).toEqual(300);
    });

    it("Has 10th frame bonus for spare",() => {
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(9);
      game.roll(1);
      game.roll(1);

      expect(score.scoring(game)).toEqual(270);
    });

    it("Only scores 20 frames if no 10 frame bonus",() => {
      for (var i = 0; i < 22; i++) {
        game.roll(1);
      }

      expect(score.scoring(game)).toEqual(20);
    });

    it("Gutter game",() => {
      for (var i = 0; i < 22; i++) {
        game.roll(0);
      }

      expect(score.scoring(game)).toEqual(0);
    });


  });
});
