describe("Game", function() {

  beforeEach(function(){
    game = new Game();
    standardFrame = jasmine.createSpyObj('frame', ['frameScore', 'calculateScore']);
    strikeFrame = jasmine.createSpyObj('frame', [ 'calculateScore']);
  });

  it("can add a frame to the frames array", function() {
    game.addFrame(standardFrame);
    expect(game.frames.length).toEqual(1);
  });

  // unable to stub a class property
  // Either need to work out how to stub class properties or create a method to return frame score
  xit("can return the totalscore for the game", function() {
    game.addFrame(strikeFrame);
    game.addFrame(standardFrame);
    game.generateTotalScore();
    expect(standardFrame.calculateScore).toBeDefined();
    expect(strikeFrame.calculateScore).toBeDefined();
    standardFrame.frameScore.and.returnValue(9);
    // const spy = spyOnProperty(standardFrame, 'frameScore', 'get').and.returnValue(9);
    expect(standardFrame.frameScore).toBe(9);
  });

});
