describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("should be able to take a score", function() {
    game.pinsDown(3);
    expect(game.totalScore).toEqual(3);
  });

  it("should be able to take a score", function() {
    game.pinsDown(5);
    expect(game.totalScore).toEqual(5);
  });

  it("should put the score in the currentFrame array", function(){
    game.pinsDown(3);
    game.pinsDown(6);
    expect(game.frameScore).toEqual([[3,6]]);
  });

  it ("should not allow a frame to have three bowls", function() {
    game.pinsDown(3);
    game.pinsDown(3);
    game.pinsDown(3);
    expect(game.currentFrame).toEqual([3]);
    expect(game.frameScore).toEqual([[3,3]]);
  });

  it ("should add the score of each frame to the FrameScorecard", function(){
    game.pinsDown(3);
    game.pinsDown(4);
    game.pinsDown(7);
    game.pinsDown(2);
    expect(game.frameScore).toEqual([[3,4],[7,2]])
    });

  it ("should finish after 10 frames", function(){
    for (var i = 0; i <= 20; i++) {
      game.pinsDown(4)
    }
    expect(game.isGameFinished()).toEqual(true);
  });

  it ("should give a score of 15 to a spare that the next ball is a 5", function(){
      game.pinsDown(5);
      game.pinsDown(5);
      game.pinsDown(5);
      game.pinsDown(0);
      expect(game.totalScore).toEqual(20);
  });

  it ("should give a score of 15 to a strike that the next two balls is a 3 and a 2", function(){
      game.pinsDown(10);
      game.pinsDown(3);
      game.pinsDown(2);
      expect(game.totalScore).toEqual(20);
  });

  it ('should return true to the strikeTest when a strike is bowled', function(){
    expect(game.isStrike([10])).toEqual(true);
  });

});
