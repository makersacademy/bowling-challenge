describe("Game", function() {

  var game;
  var frame;

  beforeEach(function() {
    game = new Game();
    frame = jasmine.createSpyObj('frame', ['updateBallOne']);
  });

  it("should start with total points 0", function() {
    expect(game.showTotalPoints()).toEqual(0);
  });

  it("should start with frame count equalling 1", function() {
    expect(game.showFrameCount()).toEqual(1);
  });

  it("should start with ball number equalling 1", function() {
    expect(game.showFrameCount()).toEqual(1);
  });

  it("should start with a scorecard as an empty array", function() {
    expect(game.showScorecard()).toEqual([]);
  });

  it("should create a Frame instance when the value of the first ball of a frame is given", function() {
    game.inputBallValue(0);
    expect(game.showScorecard().length).toEqual(1);
  });

  it("should update the value of ball one with in the Frame function", function() {
    game.inputBallValue(3, frame);
    expect(frame.updateBallOne).toHaveBeenCalled();
  });

});
