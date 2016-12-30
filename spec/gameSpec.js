describe("Game", function() {
  var frame;

  beforeEach(function() {
    game = new Game();

    strikeFrame = new Frame();
    strikeFrame.strike = true;

    spareFrame = new Frame();
    spareFrame.spare = true;

    normalFrame = new Frame();
    normalFrame.firstRollPins = 8;
    normalFrame.secondRollPins = 0;
  });

describe("The game should start with", function(){
  it("a maximum of 10 frames", function(){
    expect(game.MAXFRAMES).toEqual(10);
  });

  it("a frame counter", function(){
    expect(game.frameCounter).toEqual(0);
  });


  it("an array for the scores to be held", function(){
    expect(game.scoreBoard).toEqual([]);
  });
});

describe("Import a frame and ", function(){
  it("recognise a strike", function(){
    game.addFrame(strikeFrame);
    expect(game.scoreBoard).toEqual(["X"]);
  });

  it("recognise a spare", function(){
    game.addFrame(spareFrame);
    expect(game.scoreBoard).toEqual(["/"]);
  });

  it("adds the score of a frame if not X or /", function(){
    game.addFrame(normalFrame);
    expect(game.scoreBoard).toEqual([8]);
  });
});





});
