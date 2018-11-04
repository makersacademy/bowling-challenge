describe("Game", function() {

  beforeEach(function(){
    game = new Game();
    frame = jasmine.createSpyObj('frame', ['totalScore']);
  });

  it("can add a frame to the frames array", function() {
    game.addFrame(frame);
    expect(game.frames.length).toEqual(1);
  });

  it("can return the totalscore for the game", function() {
    game.addFrame(frame);
    game.addFrame(frame);
    frame.totalScore.and.returnValue(9);
    game.generateTotalScore();
    expect(game.gameScore).toEqual(18);
  });

});
