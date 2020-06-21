describe("game",function(){

  var game;

  beforeEach(function(){
    game = new Game();
  });

  it ("Should start with a game score of 0", function() {
    expect(game.currentScore()).toEqual(0)
  });

  // it ("Adds a roll score to the total", function() {
  //   game.addRoll(5);
  //   expect(game.currentScore()).toEqual(5)
  // });

  it("Frame score should start at zero", function() {
    expect(game.currentFrameScore()).toEqual(0)
  });

  it("Adds a roll score to the frame score", function() {
    game.addRoll(5)
    expect(game.currentFrameScore()).toEqual(5)
  });

  it("Adds a frame score to totalScore after 2 rolls", function() {
    game.addRoll(5)
    game.addRoll(3) 
    expect(game.currentScore()).toEqual(8)
  });

  it("Only adds a frame score to totalScore after 2 rolls", function() {
    game.addRoll(4)
    expect(game.currentScore()).toEqual(0)
  });



  // it ("Only adds a complete frame to the total score", function() {
  //   game.addRoll(6);
  //   expect(game.currentScore()).toBeNull()
  // });
});