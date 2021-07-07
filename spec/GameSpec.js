describe("Game", function() {

  var game;
  var frame;

  beforeEach(function() {
    game = new Game();
    frame = jasmine.createSpyObj('frame', ['updateBallOne', 'updateBallTwo', 'showTotalPoints', 'addBonusScore', 'showBallOne', 'showBallTwo']);
    frame2 = jasmine.createSpyObj('frame2', ['updateBallOne', 'updateBallTwo', 'showTotalPoints', 'addBonusScore', 'showBallOne', 'showBallTwo']);
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

  it("should update the value of ball two with in the Frame function", function() {
    game.inputBallValue(3, frame);
    game.inputBallValue(6, frame);
    expect(frame.updateBallTwo).toHaveBeenCalled();
  });

  it("should not be possible to start an 11th frame", function(){
    for (var i = 0; i < 20; i++) {
      game.inputBallValue(0);
    };
    expect(function() {game.inputBallValue(0);} ).toThrow(new Error("You have completed your scorecard - start a new game."));
  });

  it("should give a bonus of the next ball if a spare", function(){
    game.inputBallValue(3, frame);
    (frame.showBallOne).and.returnValue(3);
    (frame.showBallTwo).and.returnValue(7);
    game.inputBallValue(7, frame);
    game.inputBallValue(6, frame2);
    (frame2.showBallOne).and.returnValue(6);
    (frame2.showBallTwo).and.returnValue(2);
    game.inputBallValue(2, frame2);
    expect(frame.addBonusScore).toHaveBeenCalled();
  });

  it("should be possible to throw a bonus ball if you get a spare in the final frame", function(){
    var scoreArray = [3, 7, 7, 2, 5, 4, 10, null, 10, null, 6, 4, 1, 9, 6, 2, 8, 1, 6, 4, 6]
    for (var i = 0; i < scoreArray.length; i++) {
      game.inputBallValue(scoreArray[i])
    }
    expect(game.showTotalPoints()).toEqual(141);
  });

  it("should be possible to throw two bonus ball if you get a strike in throw of the final frame", function(){
    var scoreArray = [3, 7, 7, 2, 5, 4, 10, null, 10, null, 6, 4, 1, 9, 6, 2, 8, 1, 10, 4, 6]
    for (var i = 0; i < scoreArray.length; i++) {
      game.inputBallValue(scoreArray[i])
    }
    expect(game.showTotalPoints()).toEqual(145);
  });

});
