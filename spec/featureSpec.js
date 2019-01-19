// function fullGutterGame(roll1, roll2) {
//   if (counter <= 10){
//     counter++
//     game.addFrame(roll1, roll2)
//   }
// }    

describe("Features", function() {
  var game;
  var gutterFrame;

  beforeEach(function() {
    game = new Game();
    // gutterFrame = new Frame(0, 0);
    let counter = 0
  });

  it("Playing a 'gutter game' should return score of 0", function() {
    game.addFrame(0, 0);
    game.addFrame(0, 0);
    game.addFrame(0, 0);
    game.addFrame(0, 0);
    game.addFrame(0, 0);
    game.addFrame(0, 0);
    game.addFrame(0, 0);
    game.addFrame(0, 0);
    game.addFrame(0, 0);
    game.addFrame(0, 0);
    expect(game.totalScore).toEqual(0);
  });
})