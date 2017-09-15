describe("Bowling", function() {
  var frame;
  var game;


  beforeEach(function() {
    frame = new Frame();
    game = new Game();
  });

describe('game score', function(){
  it("adds the frame score to the total", function(){
    frame.firstBowl(5);
    frame.secondBowl(3);
    frame.firstBowl(9);
    frame.secondBowl(0);
    expect(game.addScore()).toEqual(17)
});
});
});
