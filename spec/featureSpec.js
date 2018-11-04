describe("Feature", function() {

  beforeEach(function(){
    game = new Game();
    standardFrame = new Frame([4,5]);
    spareFrame = new Frame([5,5]);
    strikeFrame = new Frame([10]);
    gutterFrame = new Frame([]);
    finalFrame = new Frame([10,10,10])
  });

  it("A single frame can be added to game", function() {
    game.addFrame(standardFrame);
    game.generateTotalScore();
    expect(game.frames.length).toEqual(1);
    expect(game.gameScore).toEqual(9);
    expect(game.frames.length).toEqual(1);
  });

  it("Spare frame followed by standard frame to have score of 23 (10 + first bowl of 2nd frame + total score of 2nd frame)", function() {
    game.addFrame(spareFrame);
    game.addFrame(standardFrame);
    game.generateTotalScore();
    expect(game.frames.length).toEqual(2);
    expect(game.gameScore).toEqual(23);
  });

  it("Strike frame followed by standard frame to have score of 28 (10 + 2 bowls of 2nd frame + score of 2nd frame)", function() {
    game.addFrame(strikeFrame);
    game.addFrame(standardFrame);
    game.generateTotalScore();
    expect(game.frames.length).toEqual(2);
    expect(game.gameScore).toEqual(28);
  });

  it("Perfect Game - Retuns score of 300", function (){
    game.addFrame(strikeFrame);
    game.addFrame(strikeFrame);
    game.addFrame(strikeFrame);
    game.addFrame(strikeFrame);
    game.addFrame(strikeFrame);
    game.addFrame(strikeFrame);
    game.addFrame(strikeFrame);
    game.addFrame(strikeFrame);
    game.addFrame(strikeFrame);
    game.addFrame(finalFrame);


    game.generateTotalScore();
    expect(game.gameScore).toEqual(300);
  });

  it("Gutter Game - returns score of 0", function (){
    game.addFrame(gutterFrame);
    game.addFrame(gutterFrame);
    game.addFrame(gutterFrame);
    game.addFrame(gutterFrame);
    game.addFrame(gutterFrame);
    game.addFrame(gutterFrame);
    game.addFrame(gutterFrame);
    game.addFrame(gutterFrame);
    game.addFrame(gutterFrame);
    game.addFrame(gutterFrame);

    game.generateTotalScore();
    expect(game.gameScore).toEqual(0);
  });



});
