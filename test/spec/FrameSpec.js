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
  })

  it("Shows score of zero if you dont hit a single pin all game", function(){
    bowlingFrames([0,0])
    expect(fullgame.currentScore()).toEqual(0);
  });
});

  it("Get the score from one frame", function() {
    frame1 = makeFrame([5,4]);
    expect(frame1.scoreframeone().toEqual(9);
  )
  });

  it("Gets the score from second frame", function () {
    frame2 = makeFrame([2,4]);
    expect(frame2.scoreframetwo().toEqual(6);
  )
  });

  it("gets the score from third frame", function () {
    frame3 = makeFrame([3,2]);
    expect(frame3.scoreframethree().toEqual(5);
  )
  })

  it("gets the score from fourth frame", function () {
    frame4 = makeFrame([1,2]);
    expect(frame4.scoreframefour().toEqual(3);
  )
  })

  it("gets the score from the fifth frame", function () {
    frame5 = makeFrame([2,2]);
    expect(frame5.scoreframefive().toEqual(4);
  )
  })

  it("gets the score from the sixth frame", function() {
    frame6 = makeFrame([1,1]);
    expect(frame6.scoreframesix().toEqual(2);
  )
  })

  it("gets the score from the seventh frame", function() {
    frame7 = makeFrame([2,1]);
    expect(frame7.scoreframeseven().toEqual(3);
  )
  })

  it("gets the score from the eighth frame", function() {
    frame8 = makeFrame([1,3]);
    expect(frame8.scoreframeeight().toEqual(4)
  )
  })

  it("gets the score from the ninth frame", function() {
    frame9 = makeFrame([2,2]);
    expect(frame9.scoreframenine().toEqual(4)
  )
  })

  it("gets the score from the tenth frame", function() {
    frame10 = makeFrame([8,1]);
    expect(frame10.scoreframeten().toEqual(9)
  )
  })

  it("gets the total score of all the above test frames", function() {
    return totalscoreinallframes
    expect(totalscoreinallframes().toEqual(4)
  )
  })

});
