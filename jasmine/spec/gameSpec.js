describe("Game", function() {
  var game;
  var frame;
  beforeEach(function() {
    game = new Game;
    frame = jasmine.createSpyObj('frame', ['_getPoints'])
  });

  it("exists", function() {
    expect(game).toBeDefined();
  });

  it("can add a frame", function() {
    game.addFrame(frame)
    expect(game._getFrames()).toEqual([frame]);
  });

  it("can return the frames", function() {
    game.addFrame(frame);
    game.addFrame(frame);
    expect(game._getFrames()).toEqual([frame, frame]);
  });

  it("counts up points", function() {
    game.addFrame(frame);
    expect(game._getOverallPoints()).not.toEqual(0);
  });
});
