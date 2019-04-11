describe("Bonus scores in rounds 1-9", function(){
  describe("Spares", function(){
    it("correctly allows a spare to be scored on one occasion", function(){
      game = new Game();
      for(let i=0; i<10; i++){
        game.recordBall(3);
      }
      expect(game.calculateTotal()).toEqual(30);
      game.recordBall(3);
      game.recordBall(7);
      game.recordBall(7);
      expect(game.calculateTotal()).toEqual(54);
    });

    it("correctly allows a spare to be scored on two occasions", function(){
      game = new Game();
      for(let i=0; i<10; i++){
        game.recordBall(3);
      }
      game.recordBall(3);
      game.recordBall(7);
      for(let j=0; j<2; j++){
        game.recordBall(3);
      }
      expect(game.calculateTotal()).toEqual(49);
      game.recordBall(6);
      game.recordBall(4);
      game.recordBall(8);
      expect(game.calculateTotal()).toEqual(75);
    });

    it("correctly allows a spare to be scored on consecutive occasions", function(){
      game = new Game();
      for(let i=0; i<10; i++){
        game.recordBall(3);
      }
      game.recordBall(3);
      game.recordBall(7);
      game.recordBall(6);
      expect(game.calculateTotal()).toEqual(52);
      game.recordBall(4);
      game.recordBall(8);
      expect(game.calculateTotal()).toEqual(72);
    });
  });

  describe("Strikes", function(){
    it("correctly allows a strike to be scored on one occasion", function(){
      game = new Game();
      for(let i=0; i<10; i++){
        game.recordBall(3);
      }
      expect(game.calculateTotal()).toEqual(30);
      game.recordBall(10);
      game.recordBall(7);
      game.recordBall(7);
      expect(game.calculateTotal()).toEqual(68);
    });

    it("correctly allows 2 strikes in a row", function(){
      game = new Game();
      for(let i=0; i<8; i++){
        game.recordBall(3);
      }
      expect(game.calculateTotal()).toEqual(24);
      game.recordBall(10);
      game.recordBall(10);
      game.recordBall(7);
      game.recordBall(5);
      // 24 + (10 + 10 + 7) + (10 + 7 + 5) + 7 + 5
      expect(game.calculateTotal()).toEqual(85);
    });

  });
});
