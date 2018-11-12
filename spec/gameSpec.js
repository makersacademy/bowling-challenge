describe("Game", function() {

  beforeEach(function(){
    game = new Game();
    standardFrame = jasmine.createSpyObj('frame', ['score', 'calculateScore']);
    strikeFrame = jasmine.createSpyObj('frame', ['score', 'calculateScore']);
  });

  it("can add a frame to the frames array", function() {
    game.addFrame(standardFrame);
    expect(game.frames.length).toEqual(1);
  });

  it("can return the totalscore for the game", function() {
    game.addFrame(strikeFrame);
    game.addFrame(standardFrame);
    strikeFrame.score.and.returnValue(19);
    standardFrame.score.and.returnValue(9);
    game.generateTotalScore()
    expect(game.gameScore).toBe(28);
  });

});
