describe("#roll", function() {
    it("returns pins knocked down by roll", function(){
      game = new Game
      expect(game.roll(8)).toEqual("Game score: 8");
    });
    it("raises an error if more than 10 pins are entered", function(){
      game = new Game
      expect(function() { game.roll(12); } ).toThrow("Maximum 10 pins");
    });
  });
