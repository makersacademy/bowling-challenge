describe("Game", function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it ("should start on frame 1", function() {
    expect(game.frameNo).toBe(1);
  });

  describe("adds scores correctly", function() {
    
    it("all 3s", function() {
      for (i = 0; i < 20; i++) {
        game.recordBowl(3);
      }
      expect(game.calculateTotalScore()).toBe(60);
    });

    it("all gutterballs ", function() {
      for (i = 0; i < 20; i++) {
        game.recordBowl(0);
      }
      expect(game.calculateTotalScore()).toBe(0);
    });

    it("after a strike", function() {
      game.recordBowl(10);
      game.recordBowl(4);
      game.recordBowl(4);
      expect(game.calculateTotalScore()).toBe(26);
    });

    it("after two strikes", function() {
      game.recordBowl(10);
      game.recordBowl(10);
      expect(game.calculateTotalScore()).toBe(30);
    });

    it("after three strikes", function() {
      game.recordBowl(10);
      game.recordBowl(10);
      game.recordBowl(10);
      expect(game.calculateTotalScore()).toBe(60);
    });

    it("after a spare", function() {
      for (i = 0; i < 3; i++) {
        game.recordBowl(5);
      }
      game.recordBowl(0);
      expect(game.calculateTotalScore()).toBe(20);
    });

    it("after two spares in a row", function() {
      for (i = 0; i < 5; i++) {
        game.recordBowl(5);
      }
      game.recordBowl(0);
      expect(game.calculateTotalScore()).toBe(35);
    });
  });

  describe("adds bonus rounds correctly", function() {

    it("spare in 10th round", function() {
      for (i = 0; i < 21; i++) {
        game.recordBowl(5);
      }
      expect(game.calculateTotalScore()).toBe(150);
    });

    it("spare in 10th round then 10", function() {
      for (i = 0; i < 20; i++) {
        game.recordBowl(5);
      }
      game.recordBowl(10);
      expect(game.calculateTotalScore()).toBe(155);
    });

    it("strike in 10th round", function() {
      for (i = 0; i < 18; i++) {
        game.recordBowl(4);
      }
      game.recordBowl(10);
      game.recordBowl(4);
      game.recordBowl(4);
      expect(game.calculateTotalScore()).toBe(90);
    });

    it("strike in 10th and 11th round", function() {
      for (i = 0; i < 18; i++) {
        game.recordBowl(4);
      }
      game.recordBowl(10);
      game.recordBowl(10);
      game.recordBowl(4);
      expect(game.calculateTotalScore()).toBe(96);
    });

    it("strike in 10th and 11th round then 10", function() {
      for (i = 0; i < 18; i++) {
        game.recordBowl(4);
      }
      game.recordBowl(10);
      game.recordBowl(10);
      game.recordBowl(10);
      expect(game.calculateTotalScore()).toBe(102);
    });

    it("perfect game (12 strikes)", function() {
      for (i = 0; i < 13; i++) {
        game.recordBowl(10);
      }
      expect(game.calculateTotalScore()).toBe(300);
    });
  });

  describe("knows when game is over", function() {
    
    it ("after 10th round if strike or spare not rolled", function() {
      for (i = 0; i < 20; i++) {
        game.recordBowl(3);
      }
      expect(game.isGameOver()).toBe(true);
    });
    it ("after 11th round if spare rolled in 10th", function() {
      for (i = 0; i < 21; i++) {
        game.recordBowl(5);
      }
      expect(game.isGameOver()).toBe(true);
    });
    it ("after 12th round if strike rolled in 10th and 11th", function() {
      for (i = 0; i < 12; i++) {
        game.recordBowl(10);
      }
      expect(game.isGameOver()).toBe(true);
    });
  });

  describe("knows when game is still playing", function() {

    it ("after 10th round if spare rolled in 10th", function() {
      for (i = 0; i < 20; i++) {
        game.recordBowl(5);
      }
      expect(game.isGameOver()).toBe(false);
    });

    it ("after 11th round if strike rolled in 10th and 11th", function() {
      for (i = 0; i < 11; i++) {
        game.recordBowl(10);
      }
      expect(game.isGameOver()).toBe(false);
    });
  });
});
