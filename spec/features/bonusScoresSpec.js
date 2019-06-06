var Game = require('../../src/Game');

describe("Bonus scores in rounds 1-9", function(){
  describe("Spares", function(){
    beforeEach(function() {
      game = new Game();
    })

    it("correctly allows a spare to be scored on one occasion", function(){
      for(let i=0; i<10; i++){
        game.recordScore(3);
      }
      expect(game.calculateTotal()).toEqual(30);
      game.recordScore(3);
      game.recordScore(7);
      game.recordScore(7);
      expect(game.calculateTotal()).toEqual(54);
    });

    it("correctly allows a spare to be scored on two occasions", function(){
      for(let i=0; i<10; i++){
        game.recordScore(3);
      }
      game.recordScore(3);
      game.recordScore(7);
      for(let j=0; j<2; j++){
        game.recordScore(3);
      }
      expect(game.calculateTotal()).toEqual(49);
      game.recordScore(6);
      game.recordScore(4);
      game.recordScore(8);
      expect(game.calculateTotal()).toEqual(75);
    });

    it("correctly allows a spare to be scored on consecutive occasions", function(){
      for(let i=0; i<10; i++){
        game.recordScore(3);
      }
      game.recordScore(3);
      game.recordScore(7);
      game.recordScore(6);
      expect(game.calculateTotal()).toEqual(52);
      game.recordScore(4);
      game.recordScore(8);
      expect(game.calculateTotal()).toEqual(72);
    });
  });

  describe("Strikes", function(){

    it("correctly allows a strike to be scored on one occasion", function(){
      game = new Game();
      for(let i=0; i<10; i++){
        game.recordScore(3);
      }
      expect(game.calculateTotal()).toEqual(30);
      game.recordScore(10);
      game.recordScore(7);
      game.recordScore(7);
      expect(game.calculateTotal()).toEqual(68);
    });
  });

  describe("DoubleStrike", function(){

    it("correctly allows 2 strikes in a row", function(){
      game = new Game();
      for(let i=0; i<8; i++){
        game.recordScore(3);
      }
      expect(game.calculateTotal()).toEqual(24);
      game.recordScore(10);
      game.recordScore(10);
      game.recordScore(7);
      game.recordScore(5);
      game.recordScore(5);
      // 24 + (10 + 10 + 7) + (10 + 7 + 5) + 7 + 5 + 5
      expect(game.calculateTotal()).toEqual(90);
    });
  });
});
