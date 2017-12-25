describe("ScoreSheet", function(){
  var scoresheet;

  beforeEach(function(){
    scoresheet = new ScoreSheet();
  });

  it("should add the result of a frame to the scoresheet", function(){
    frameRoll([5,0])
    expect(scoresheet.frames[0]).toEqual([5,0]);
  });

  it("should log the result of the 2nd frame to the scoresheet", function(){
    frameRoll([0,5])
    frameRoll([4,3])
    expect(scoresheet.frames[1]).toEqual([4,3]);
    expect(scoresheet.frames).toEqual([[0,5], [4,3]]);
  });

  it("should log the result of a strike on its own on the scoresheet", function(){
    frameRoll([10])
    frameRoll([4,3])
    expect(scoresheet.frames[0]).toEqual([10]);
    expect(scoresheet.frames).toEqual([[10], [4,3]]);
  });

  it("should add the result of a frame with the added score for the frame", function(){
    frameRoll([5,0])
    expect(frame.addTotalFramePoints()).toEqual(5)
  });

  // describe('Display the score of a frame',function(){
  //   it("should add calculate the score of a spare", function(){
  //     frameRoll([5,5])
  //     frameRoll([5,0])
  //     expect(frame.addTotalFramePoints()).toEqual(5)
  //   });
  // });

  var frameRoll = function(pinsDown) {
    frame = new Frame();
    for(var i = 0; i < pinsDown.length; i++) {
      frame.appendNumberPinsDown(pinsDown[i]);
    };
    scoresheet.addNewFrame(frame.roll)
  };
});
