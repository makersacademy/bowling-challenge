describe("ScoreSheet", function(){
  var scoresheet;

  beforeEach(function(){
    scoresheet = new ScoreSheet();
  });

  it("should add the result of a frame to the scoresheet", function(){
    frameRoll(5,0)
    expect(scoresheet.frames[0]).toEqual([5,0]);
  });

  it("should log the result of the 2nd frame to the scoresheet", function(){
    frameRoll(0,5)
    frameRoll(4,3)
    expect(scoresheet.frames[1]).toEqual([4,3]);
    expect(scoresheet.frames).toEqual([[0,5], [4,3]]);
  });

  var frameRoll = function(value1, value2){
    frame = new Frame();
    frame.appendNumberPinsDown(value1)
    frame.appendNumberPinsDown(value2)
    scoresheet.addNewFrame(frame.roll)
  };
});
