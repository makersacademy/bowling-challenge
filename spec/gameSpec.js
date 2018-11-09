describe("Game", function() {

  beforeEach(function(){
    game = new Game();
    standardFrame = jasmine.createSpyObj('frame', ['score']);
    strikeFrame = jasmine.createSpyObj('frame', ['score']);
  });

  it("can add a frame to the frames array", function() {
    game.addFrame(standardFrame);
    expect(game.frames.length).toEqual(1);
  });

  // unable to stub a class property
  // Either need to work out how to stub class properties or create a method to return frame score
  xit("can return the totalscore for the game", function() {
    strikeFrame.score.and.returnValue(19);
    standardFrame.score.and.returnValue(9);
    game.addFrame(strikeFrame);
    game.addFrame(standardFrame);
    game.generateTotalScore()
    expect(standardFrame.frameScore).toBe(28);
  });

});
