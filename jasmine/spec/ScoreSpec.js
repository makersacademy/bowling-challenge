describe("Score", function () {
  var score;

  beforeEach(function() {
    score = new Score;
  });

  it("can be evaluated from a single full frame", function(){
    frames = {1 : [5,2]};
    currentFrame = 2;
    expect(score.calculate(frames, currentFrame)).toEqual(7);
  });

});
