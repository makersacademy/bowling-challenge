describe("Game", function() {
  var game;

  describe("keeps track of the score", function() {
    it("after first roll", function() {
      game = new Game;
      game.roll(4);
      expect(game.getTotalScore()).toEqual(4);
    });

    it("after second roll", function() {
      game = new Game;
      game.roll(4);
      game.roll(2);
      expect(game.getTotalScore()).toEqual(6);
    });
  });


  describe("keeps track of the rolls", function() {
    it("knows whether it's the first or second roll in a certain frame", function(){
      game = new Game;
      game.roll(4);
      game.roll(2);
      game.roll(3);
      game.roll(5);
      expect(game.frames[1].firstRoll).toEqual(3);
      expect(game.frames[1].secondRoll).toEqual(5);
    });
  });

  describe("recognises a strike or a spare", function() {
    it("strike", function(){
      game = new Game;
      game.roll(10);
      game.roll(3);
      game.roll(4);
      expect(game.frames[0].firstRoll).toEqual(10);
      expect(game.frames[0].firstRoll).toEqual(3);
      expect(game.frames[0].secondRoll).toEqual(4);
    });
  });


});