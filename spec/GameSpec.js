describe("Game", function() {
  var game;
  // var song;

  beforeEach(function() {
    game = new Game();
    // song = new Song();
  });

  it("When I start the game i have score zero", function() {
    expect(game.score).toEqual(0);
  });

  it("When I roll the ball and hits some pins I get some score", function() {
    game.rollBall(5);
    expect(game.score).toEqual(5);
  });

  it("If some pins were remained, we expect the second throw", function(){
    game.rollBall(5);
    expect(game.firstThrow).toEqual(false);
  });


  it("The frame should change after the second throw if the first wasn't a strike", function(){
    game.rollBall(5);
    game.rollBall(5);
    expect(game.frameNumber).toEqual(2);
  });

  it("it remembers which score were made each frame", function(){
    game.rollBall(5);
    game.rollBall(5);
    game.rollBall(5);
    expect(game.scoreCard[1]).toEqual([5, 5]);
  });

  it("It knows when the last frame is a spare", function(){
    game.rollBall(5);
    game.rollBall(5);
    game.isSpare();
    expect(game.lastFrame).toEqual("Spare!");
  });

  it("sets the last frame to an empty string after the last frame was a spare", function() {
    game.rollBall(5);
    game.rollBall(5);
    game.rollBall(2);
    game.rollBall(2);
    expect(game.lastFrame).toEqual("");
  });

  it("adds spare bonus points to the appropriate frame in the bonus array", function() {
    game.rollBall(5);
    game.rollBall(5);
    game.rollBall(5);
    game.rollBall(5);
    game.rollBall(5);
    expect(game.bonusPoints[3]).toEqual([5]);
  });

  it("It knows when we hit a strike", function(){
    game.rollBall(10);
    expect(game.lastFrame).toEqual("Strike!");
  });

  it("It changes frame when you roll a strike", function(){
     game.rollBall(10);
     expect(game.frameNumber).toEqual(2);
  });

  it("It adds ten points to the score card when you roll strike", function() {
    game.rollBall(10);
    expect(game.scoreCard[1]).toEqual([10]);
  });

  it("adds bonus points to the appropriate frame in the bonus array when you roll a strike", function() {
    game.rollBall(10);
    game.rollBall(3);
    expect(game.bonusPoints[2]).toEqual([3]);
  });

  it("It should not give bonus points when a strike is rolled in current frame", function() {
    game.rollBall(10);
    expect(game.bonusPoints[1]).toEqual([])
  });

  it("last frame should be set back to normal two rolls after a strike", function() {
    game.rollBall(10);
    game.rollBall(4);
    game.rollBall(4);
    expect(game.lastFrame).toEqual("");
  });

  it("bonus points from a strike should be remembered for both rolls after the strike", function() {
    game.rollBall(10);
    game.rollBall(4);
    game.rollBall(4);
    expect(game.bonusPoints[2]).toEqual([4, 4]);
  });

  it("when the second ball after a strike is rolled, game should be set to first throw", function() {
    game.rollBall(10);
    game.rollBall(4);
    game.rollBall(4);
    expect(game.firstThrow).toEqual(true);
  });

  it("adds points for two throws after a strike to the total score", function() {
    game.rollBall(10);
    game.rollBall(4);
    game.rollBall(4);
    expect(game.score).toEqual(18);
  });

  it("The frame needs change after the second strike", function(){
    game.rollBall(10);
    game.rollBall(10);
    expect(game.frameNumber).toEqual(3);
  
  });



});
