describe("ScoreBoard", function() {

  var scoreBoard;

  beforeEach(function() {
    scoreBoard = new ScoreBoard();
    frame1 = new Frame();
    frame2 = new Frame();
    frame3 = new Frame();
  });

  it("has a score of 0 before the game begins", function(){
    expect(scoreBoard.totalScore).toEqual(0)
  });

  it("can contain frames", function(){
    scoreBoard.addFrame(frame1);
    expect(scoreBoard.frames.length).toEqual(1)
  })

  it("can add scores in frame together", function(){
    frame1.roll1(4);
    frame1.roll2(3);
    scoreBoard.addFrame(frame1);
    expect(scoreBoard.totalScore).toEqual(7)
  })

  it("knows the next frame", function(){
    scoreBoard.addFrame(frame1);
    scoreBoard.addFrame(frame2);
    scoreBoard.addFrame(frame3);
    expect(scoreBoard.nextFrame(frame2)).toBe(frame3)
  })

  it("can have a total of 10 frames", function(){
    for(var i = 0; i < 10; i++) {
      scoreBoard.addFrame(frame1)
    }
    expect(function(){ scoreBoard.addFrame(frame1) }).toThrow(new Error("Game can only have 10 frames"));
  })

});