describe("Game", function(){

  var game;

  beforeEach(function(){
    game = new Game();
  });

  it("has no intial rolls", function(){
    expect(game.rolls).toEqual([]);
  });

  it("starts on frame 1", function(){
    expect(game.frame).toEqual(1);
  });

  describe("#roll", function(){
    it("saves the roll score/s", function(){
      game.roll(3);
      expect(game.rolls).toContain(3);
    });

    it("determines bonuses by frame and roll", function(){
      game.roll(3);
      game.roll(3);
      game.roll(7);
      expect(game.rolls).not.toContain("/");
    });

    it("moves to the next frame after 2 rolls", function(){
      game.roll(3);
      game.roll(6);
      expect(game.frame).toEqual(2);
    });

    it("moves to the next frame after a strike", function(){
      game.roll(10);
      expect(game.frame).toEqual(2);
    });

    it("moves to the next frame after a spare", function(){
      game.roll(3);
      game.roll(7);
      expect(game.frame).toEqual(2);
    });
  });

  describe("#calculateScore", function(){
    it("returns a score after a roll", function(){
      game.roll(5);
      expect(game.score).toEqual(5);
    });

    it("calculates a strike", function(){
      game.roll(10);
      game.roll(3);
      game.roll(4);
      expect(game.score).toEqual(24);
    });

    it("calculates a spare", function(){
      game.roll(9);
      game.roll(1);
      game.roll(3);
      expect(game.score).toEqual(16);
    });
  });

  describe("#finalFrame", function(){
    it("lets you roll 3 times in the 10th frame if you get strikes or spares", function(){
      game.frame = 10;
      game.roll(8);
      game.roll(2);
      expect( function() { game.roll(5); } ).not.toThrow("The game has ended");
    });
  });

  describe("#endGame", function(){
    it("ends the game after frame 10", function(){
      game.frame = 10;
      game.roll(3);
      expect( function() { game.roll(6); } ).toThrow(new Error("The game has ended"));
    });
  });
});
