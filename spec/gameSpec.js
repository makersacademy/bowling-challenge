describe("Game", function() {

  beforeEach(function(){
    game = new Game();

    frame = jasmine.createSpyObj('standardFrame', ['bowls', 'totalScore']);
    frame.totalScore.and.returnValue(9);

    standardFrame = new Frame([4,5]);

  });

  it("can add a frame to the frames array", function() {
    game.addFrame(frame);
    expect(game.frames.length).toEqual(1);
  });

  it("can return the totalscore for the game", function() {
    game.addFrame(standardFrame);
    game.addFrame(standardFrame);

    game.generateTotalScore();
    expect(game.gameScore).toEqual(18);
    // expect(game.gameScore).toEqual(18);
  });

});
