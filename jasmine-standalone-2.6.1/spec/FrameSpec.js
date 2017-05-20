describe("Bowling", function() {
  var frame;
  var game

  beforeEach(function() {
    game = new Game();
    frame = new Frame();
  });

describe('frame score', function(){
  it("it collects the score for one frame with no strike or spare", function(){
    frame.firstBowl(5);
    frame.secondBowl(3);
    expect(frame.score).toEqual(8)
  });
  it('collects the score from one frame with strike', function(){
    frame.firstBowl(10);
    frame.secondBowl(0);
    expect(frame.score).toEqual(10)
  });
  });
describe('game score', function(){
  it("adds the frame score to the total")
   game.
}
});
