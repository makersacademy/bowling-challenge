let counter = 0

describe("Game", function() {
  var game;
  var newFrame;

  function fullGame(roll1, roll2) {
    if (counter < 10){
      counter++
      game.addFrame(roll1, roll2)
      fullGame(roll1, roll2)
    }
  }    

  beforeEach(function() {
    game = new Game();
  });

  it("Can create a game class", function() {
    expect(game instanceof Game).toBe(true);
  });

  it("Can create a new frame object", function() {
    newFrame = game.addFrame(0,0)
    expect(newFrame instanceof Frame).toBe(true)
  })

  it ("Can return the array of frames played", function() {
    game.frames = ["testing"]
    expect(game.getFrames()).toEqual(["testing"])
  })

  it("Can total up the scores inside the frames array", function() {
    fullGame(0,0)
    expect(game.totalScore()).toEqual(0)
  })
})