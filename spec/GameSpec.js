describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
    framescore = 6;
  });

  it("starts with a score of 0", function() {
    expect(game.overallScore).toEqual(0);
  });

  it("is able to add a frame score to the overall score", function() {
    game.addFrameScore(framescore);
    expect(game.framesScores).toContain(6);
  });

  it("calculates the overall score of the frames", function() {
    for (var i = 0; i < 10; i++) { game.framesScores[i] = 6 };
     expect(game.calculateOverallScore()).toEqual(60);
  });

  it("generates all the frames", function() {
     expect(game.loadFrames([3,5,10,5,5,3,5,6,2,2,3,5,4,7,1,7,1,6,2]).length).toEqual(10);
  });


});
