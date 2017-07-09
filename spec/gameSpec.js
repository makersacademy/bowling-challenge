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
  })

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
    })
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
});
