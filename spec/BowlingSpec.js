describe("Bowling", function() {

  var gameFrames;

  beforeEach( function() {
  bowlingGame = new Bowling();
  });

  it("each game begins with 10 frames", function() {
    expect(bowlingGame.gameFrames).toEqual(10);
  });


})
