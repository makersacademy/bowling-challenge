describe("game",function(){

  var game;

  beforeEach(function(){
    game = new Game();
  });

  it ("Should start with a game score of 0", function() {
    expect(game.totalScore).toEqual(0)
  });

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
    expect(game.totalScore).toEqual(8)
  });

  it("Only adds a frame score to totalScore after 2 rolls", function() {
    game.addRoll(4)
    expect(game.totalScore).toEqual(0)
  });

  it("keeps track of the number of completed frames", function() {
    for (var i = 0; i < 13; i++) {
      game.addRoll(6);
    }
    expect(game.numberOfFrames).toEqual(6)
  });

  it("Won't add to the score after 10 frames have been completed", function() {
    for (var i = 0; i < 23; i++) {
      game.addRoll(6);
    }
    expect(game.numberOfFrames).toEqual(10)
  })

});