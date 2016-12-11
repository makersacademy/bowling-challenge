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

  it("should initialize with a scores of zero", function(){
    expect(scoreBoard.scores).toEqual([]);
  });

  it("should initialize with a maximum score of 10", function(){
    expect(scoreBoard.maxScore).toEqual(10);
  });

  it("should set the players first roll score", function(){
    scoreBoard.firstRoll(3);
    expect(scoreBoard.currentScore).toContain(3);
  });

  it("should indicate that a strike was scored in the set", function(){
    scoreBoard.firstRoll('Strike');
    expect(scoreBoard.scores).toContain('Strike');
  });

  it("should set the players second roll score", function(){
    scoreBoard.secondRoll(4);
    expect(scoreBoard.currentScore).toContain(4);
  });

  it("should calculate the total score for the set", function(){
    scoreBoard.firstRoll(3);
    scoreBoard.secondRoll(4);
    scoreBoard.calculateScore()
    expect(scoreBoard.scores).toContain(7);
  });

  it("should increase the frame count by 1 for each roll set", function(){
    scoreBoard.firstRoll(3);
    scoreBoard.secondRoll(4);
    scoreBoard.calculateScore();
    scoreBoard.currentFrame();
    expect(scoreBoard.frameCount).toEqual(1);
    });

  it("should confirm that strike adds to the frame count", function(){
    scoreBoard.firstRoll('Strike');
    scoreBoard.currentFrame();
    expect(scoreBoard.frameCount).toEqual(1);
  });

  it("should calculate the totals when player gets a strike", function(){
    scoreBoard.firstRoll('Strike');
    scoreBoard.firstRoll(3);
    scoreBoard.secondRoll(3);
    scoreBoard.calculateScore();
    scoreBoard.currentFrame();
    scoreBoard.bonusPoints();
    expect(scoreBoard.scores).toContain(16);
  });

  it("should calculate the totals when player gets a spare", function(){
    scoreBoard.firstRoll(5);
    scoreBoard.secondRoll(5);
    scoreBoard.calculateScore();
    scoreBoard.firstRoll(3);
    scoreBoard.secondRoll(6);
    scoreBoard.calculateScore();
    scoreBoard.currentFrame();
    scoreBoard.bonusPoints();
    expect(scoreBoard.scores).toContain(13);
  });

  it("should return the scores if there are no spares or strikes", function(){
    scoreBoard.firstRoll(2);
    scoreBoard.secondRoll(6);
    scoreBoard.calculateScore();
    scoreBoard.bonusPoints();
    expect(scoreBoard.scores).toContain(8);
  });
});
