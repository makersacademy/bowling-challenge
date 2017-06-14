describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("It has an array to store the pins knocked down for every roll in the game", function() {
    expect(game.ballPins).toEqual(jasmine.any(Array));
  });

  it("holds frames in an array", function() {
    expect(game.frames[0]).toEqual(jasmine.any(Frame));
    expect(game.frames[8]).toEqual(jasmine.any(Frame));
  });

  it("holds a final frame in the last slot of the frames array", function() {
    expect(game.frames[9]).toEqual(jasmine.any(FinalFrame));
  });

  it("records a running total for the score", function() {
    game.frames[0].finalFrameScore = 4
    game.frames[1].finalFrameScore = 8
    expect(game.runningTotal()).toEqual(12)
  });

  it("records the number of pins knocked down after each bowl", function() {
    game.bowl(); game.bowl();
    expect(game.ballPins[0] >= 0 && game.ballPins[0] <= 10).toBeTruthy();
    expect(game.ballPins[1] >= 0 && game.ballPins[1] <= 10).toBeTruthy();
  });

  it("correctly scores a full game", function() {
    game.frames[0].roll = function() { return 8 }; game.bowl();
    game.frames[0].roll = function() { return 2 }; game.bowl();
    game.frames[1].roll = function() { return 5 }; game.bowl();
    game.frames[1].roll = function() { return 4 }; game.bowl();
    game.frames[2].roll = function() { return 9 }; game.bowl();
    game.frames[2].roll = function() { return 0 }; game.bowl();
    game.frames[3].roll = function() { return 10 }; game.bowl();
    game.frames[4].roll = function() { return 10 }; game.bowl();
    game.frames[5].roll = function() { return 5 }; game.bowl();
    game.bowl();
    game.frames[6].roll = function() { return 5 }; game.bowl();
    game.frames[6].roll = function() { return 3 }; game.bowl();
    game.frames[7].roll = function() { return 6 }; game.bowl();
    game.frames[7].roll = function() { return 3 }; game.bowl();
    game.frames[8].roll = function() { return 9 }; game.bowl();
    game.frames[8].roll = function() { return 1 }; game.bowl();
    game.frames[9].roll = function() { return 9 }; game.bowl();
    game.frames[9].roll = function() { return 1 }; game.bowl();
    game.frames[9].roll = function() { return 10 }; game.bowl();
    expect(game.runningTotal()).toEqual(149)
  });

  it("calculates a total of 300 points for a perfect game", function() {
      var game = new Game(function(parameter) { return 10; })
      var times = 12;
      for(var i=1; i <= times; i++){ game.bowl(); }
      expect(game.runningTotal()).toEqual(300)
  })



});
