describe("Frame", function() {
  var Frame;
})

  beforeEach(function() {
    frame = new Frame();
  });

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
