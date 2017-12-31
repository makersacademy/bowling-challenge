describe("Game", function() {
  var game

  beforeEach(function() {
    game = new Game;
    spyOn(testFrame, "roll1(pinsHit)");
  });

  it("initiliazes a new game with an array containing the first frame", function() {
    expect(game.frames.length).toEqual(1)
  });

  it("starts a new game with a score of 0", function() {
    expect(game.calculateGameScore()).toEqual(0)
  });

  // it("Starts the game at frame 1", function() {
  //   expect(game.frameNumber).toEqual(1)
  // });

  it("Adds a new frame", function() {
    game.addNewFrame()
    expect(game.frames.length).toEqual(2)
  });

  it("should stop new frames being added when there are 10 frames", function() {
    for (i = 0; i <= 10; i++) {
      game.addNewFrame();
    };
    game.addNewFrame()
    expect(game.frames.length).toEqual(10)
  });

  it("scores a strike", function() {
    
  })

})
