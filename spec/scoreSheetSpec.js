describe("ScoreSheet", function(){
  var scoresheet;

  beforeEach(function(){
    scoresheet = new ScoreSheet();
  });

  it("should add the result of a frame to the scoresheet", function(){
    frame = new Frame();
    frame.appendNumberPinsDown(5)
    frame.appendNumberPinsDown(3)
    scoresheet.addNewFrame(frame.roll)
    expect(scoresheet.frames[0]).toEqual([5,3]);
  });
});
