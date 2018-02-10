describe("Game", function() {
  var game;

  describe("general game behaviour", function() {
    beforeEach(function() {
      game = new Game();
      game.start(10);
    });

    it("has 10 empty frames when the game starts", function() {
      expect(game.frames.length).toEqual(10);
    });

    it("has a running total", function() {
      game.roll(1,1,3);
      game.roll(1,2,4);
      game.calculateTotal();
      expect(game.runningTotal).toEqual(7)
    });
  });

  describe("enters bowl scores", function() {
    beforeEach(function() {
      game = new Game();
      game.start(10);
    });

    it("enters a first bowl into a frame", function() {
      game.roll(1,1,3);
      expect(game.frames[0].bowls).toEqual([3])
    });

    it("enters a second bowl into a frame", function() {
      game.roll(1,1,3);
      game.roll(1,2,4);
      expect(game.frames[0].bowls).toEqual([3,4])
    });
  });

  describe("spare", function() {
    beforeEach(function() {
      game = new Game();
      game.start(10);
    });

    it("adds the next roll to the previous frame score", function() {
      game.roll(1,1,7);
      game.roll(1,2,3);
      game.roll(2,1,1);
      game.roll(2,2,3);
      expect(game.frames[0].total).toEqual(11)
    });

    it("has the correct running total", function() {
      game.roll(1,1,7);
      game.roll(1,2,3);
      game.roll(2,1,1);
      game.roll(2,2,3);
      game.calculateTotal();
      expect(game.runningTotal).toEqual(15)
    });
  });

  describe("strike", function() {
    beforeEach(function() {
      game = new Game();
      game.start(10);
    });

    it("adds the next two rolls to the previous frame score", function() {
      game.roll(1,1,10);
      game.roll(2,1,1);
      game.roll(2,2,3);
      expect(game.frames[0].total).toEqual(14)
    });

    it("adds the next two rolls if the first of them is strike", function() {
      game.roll(1,1,10);
      game.roll(2,1,10);
      game.roll(3,1,3);
      game.roll(3,2,5);
      expect(game.frames[0].total).toEqual(23)
      expect(game.frames[1].total).toEqual(18)
    });

    it("has the correct running total after 2 strikes", function() {
      game.roll(1,1,10);
      game.roll(2,1,10);
      game.roll(3,1,3);
      game.roll(3,2,5);
      game.calculateTotal();
      expect(game.runningTotal).toEqual(49)
    });
  });


});
