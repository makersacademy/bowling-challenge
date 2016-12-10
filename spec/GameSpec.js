describe("Game", function(){
  var game
  beforeEach(function(){
    game = new Game();
    game.startGame();
  });

  describe("start a game", function(){
    it("should have an array to store scores", function(){
      expect(game.scoreArray).toEqual([]);
    });

    it("should have 10 frames remaining", function(){
      expect(game.numberOfFramesRemaining).toEqual(10);
    });
  });

describe("frames", function(){
  it("first throw of first frame", function(){
    game.inputFirstThrow(6);
    expect(game.frameScore).toEqual([6])
  });

  it("second throw of first frame", function(){
  game.inputFirstThrow(6);
  game.inputSecondThrow(0);
  expect(game.frameScore).toEqual([6,0])  
  });
});



});
