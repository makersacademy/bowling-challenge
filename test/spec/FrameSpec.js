describe("Frame", function() {
  var Frame;
})

  beforeEach(function() {
    frame = new Frame();
    var frame1;
    var frame2;
    var frame3;
    var frame4;
    var frame5;
    var frame6;
    var frame7;
    var frame8;
    var frame9;
    var frame10;
  });

  function createframearray(array) {
    return new frame(array)
  }


  function bowlingFrames(frame, frame10) {
  for(var i = 0 ; i < 9; i++) {
    fullgame.bowling(frame)
    }
  fullgame.bowling(frame 10 || frame)
  }

  it("Shows score of zero if you dont hit a single pin all game", function(){
    bowlingFrames([0,0])
    expect(fullgame.currentScore()).toEqual(0);
  });
});


  it("Get the score from one frame", function() {
    frame1 = makeFrame([5,4]);
    expect(frame1.scoreframeone().toEqual(9);
  });

  it("Gets the score from second frame", function () {
    frame2 = makeFrame([2,4]);
    expect(frame2.scoreframetwo().toEqual(6);
  });

});
