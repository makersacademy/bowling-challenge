describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game()
  });

  describe("#Add", function() {
    it("adds the score to the frame", function() {
      game.add(1,2);
      expect(game.frames[0].rolls).toEqual([1,2]);
    });

    it("moves to the next frame after each score is added", function() {
      game.add(1,3);
      game.add(4,3);
      expect(game.frames[1].rolls).toEqual([4,3]);
    });
  });

  describe("#Total", function() {
    it("adds the rolls of each frame", function() {
      game.add(4,3);
      game.add(3,4);
      expect(game.total()).toEqual(14);
    });

    it("returns the score of the whole game (without strikes or spares)", function() {
      for (var i = 0; i < 10; i++) {
        game.add(4,3);
      };
      expect(game.total()).toEqual(70);
    });

    it("returns the score of the game after two frames with one strike", function() {
      game.add(10);
      game.add(1,3);
      expect(game.total()).toEqual(18);
    });
  });

  describe("#Spare", function() {
    it("adds the first roll of the next round as a bonus", function () {
      game.add(5,5);
      game.add(2,3);
      expect(game.frames[0].bonus).toEqual(2);
    });
  });

  describe("#Strike", function() {
    it("adds the next frame as a bonus", function() {
      game.add(10);
      game.add(3,2);
      expect(game.frames[0].bonus).toEqual(5);
    });

    it("adds a strike to a previous strike", function() {
      game.add(10);
      game.add(10);
      expect(game.frames[0].bonus).toEqual(10);
    });

    it("two subsequent strikes will add the first roll of the third frame to the first strike", function() {
      game.add(10);
      game.add(10);
      game.add(1,3);
      expect(game.frames[0].bonus).toEqual(11);
    });

    it("only adds bonus to frame before last if last frame was also a strike", function() {
      game.add(10);
      game.add(5,5);
      game.add(1,3);
      expect(game.frames[0].bonus).toEqual(10);
    });
  });
});
