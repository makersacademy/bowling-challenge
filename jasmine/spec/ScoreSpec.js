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

  it("can recognise a strike", function(){
    frame = [10,0]
    expect(score.isStrike(frame)).toBe(true);
  });

  it("can recognise a spare", function(){
    frame = [8,2]
    expect(score.isSpare(frame)).toBe(true);
  });

  it("can add bonus points for a strike", function(){
    frames = {1 : [10,0], 2 : [5,2]};
    currentFrame = 3;
    expect(score.calculate(frames, currentFrame)).toEqual(24);
  });

  it("can add bonus points for a spare", function(){
    frames = {1 : [8,2], 2 : [5,2]};
    currentFrame = 3;
    expect(score.calculate(frames, currentFrame)).toEqual(22);
  });



});
