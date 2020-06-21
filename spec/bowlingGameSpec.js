'use strict'

describe("Game", function(){
    let game
    beforeEach(function(){
      game = new Game();
    });
    it("always starts with a score of 0", function(){
      expect(game.gameScore).toEqual(0);
    });

    it("sums the total of 2 scores", function(){
      expect(game.score(2, 3)).toEqual(5);
    });

    it("accumulates frame number each frame", function(){
      game.score(2, 3);
      expect(game.frame).toEqual(1);
    });

    it("adds a spare correctly", function(){
      game.score(2, 8);
      game.score(2, 4);
      expect(game.gameScore).toEqual(18);
    })







});
