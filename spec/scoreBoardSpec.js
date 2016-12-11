describe("Scoreboard", function(){
  var scoreBoard;

  beforeEach(function(){
    scoreBoard = new Scoreboard;
  });

  it("should initialize with currentScore being an empty array", function(){
    expect(scoreBoard.currentScore).toEqual([]);
  });

  it("should initialize with a frame count of zero", function(){
    expect(scoreBoard.frameCount).toEqual(0);
  });

  it("should set the players first roll score", function(){
    scoreBoard.firstRoll(3);
    expect(scoreBoard.currentScore).toContain(3);
  });

  it("should set the players second roll score", function(){
    scoreBoard.secondRoll(4);
    expect(scoreBoard.currentScore).toContain(4);
  });

  it("should increase the frame count by 1 for each roll set", function(){
    scoreBoard.secondRoll(4);
    scoreBoard.currentFrame();
    expect(scoreBoard.frameCount).toEqual(1);
  });

  it("should calculate the total score for the set", function(){
    scoreBoard.secondRoll(4);
    expect(scoreBoard.calculateScore()).toEqual(7);
  });


});
