describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("Frame points are equal to zero at the begining of the game", function() {
    expect(game.getFramePoints()).toEqual(0);
  });

  it("calculates points for the current frame after the 1st roll", function() {
    game.calculateFramePoints(5);
    expect(game.getFramePoints()).toEqual(5);
  });

  it("calculates points for the current frame after the 2nd roll", function() {
    game.calculateFramePoints(5);
    game.updateFrame();
    game.calculateFramePoints(3);
    // console.log("points (8)" + game.currentFramePoints);
    expect(game.getFramePoints()).toEqual(8);
  });

  it("calculates points for a new frame", function() {
    game.calculateFramePoints(5);
    game.updateFrame();
    game.calculateFramePoints(3);
    game.updateFrame();
    game.calculateFramePoints(4);
    expect(game.getFramePoints()).toEqual(4);
  });

  it("adds bonus for a strike", function() {
    game.calculateFramePoints(10);
    game.updateFrame();
    game.calculateFramePoints(2);
    game.updateFrame();
    game.calculateFramePoints(2);
    game.updateFrame();
    expect(game.frameScores[1]).toEqual(14);
    expect(game.frameScores[2]).toEqual(4);
  });

  it("adds bonus for a spare", function() {
    game.calculateFramePoints(5);
    game.updateFrame();
    game.calculateFramePoints(5);
    game.updateFrame();
    game.calculateFramePoints(2);
    game.updateFrame();
    game.calculateFramePoints(2);
    game.updateFrame();
    expect(game.frameScores[1]).toEqual(12);
    expect(game.frameScores[2]).toEqual(4);
  });

  it("calculates total points", function() {
    game.calculateFramePoints(5);
    game.updateFrame();
    game.calculateFramePoints(5);
    game.updateFrame();
    game.calculateFramePoints(2);
    game.updateFrame();
    game.calculateFramePoints(2);
    game.updateFrame();
    expect(game.total()).toEqual(16);
  });

});
