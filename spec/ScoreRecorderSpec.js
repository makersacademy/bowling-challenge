describe("ScoreRecorder",function(){
  var scoreRecorder
  var scorecard
  beforeEach (function(){
    scorecard = []
    scoreRecorder = new ScoreRecorder(scorecard)
    spyOn(scoreRecorder.check, 'roll').and.returnValue(0);
  })
  it ("records a new score in a given array",function(){
    scoreRecorder.roll(5)
    expect(scorecard).toEqual([[5]])
  })
  it ("records a 21st into frame 10 roll if frame 10 contained a spare",function(){
    for(var i = 1; i <= 20; i++){
      scoreRecorder.roll(5);
    };
    expect(scorecard).toEqual([[5,5],[5,5],[5,5],[5,5],[5,5],[5,5],[5,5],[5,5],[5,5],[5,5]])
    scoreRecorder.roll(5);
    expect(scorecard).toEqual([[5,5],[5,5],[5,5],[5,5],[5,5],[5,5],[5,5],[5,5],[5,5],[5,5,5]])
  });
  it ("records a 20th roll into frame 10 roll if frame 10 contained a strike",function(){
    for(var i = 1; i <= 18; i++){
      scoreRecorder.roll(5);
    };
    scoreRecorder.roll(10);
    expect(scorecard).toEqual([[5,5],[5,5],[5,5],[5,5],[5,5],[5,5],[5,5],[5,5],[5,5],[10]])
    scoreRecorder.roll(5)
    expect(scorecard).toEqual([[5,5],[5,5],[5,5],[5,5],[5,5],[5,5],[5,5],[5,5],[5,5],[10,5]])
  });

  it ("can record a perfect game",function(){
    for(var i = 1; i <= 12; i++){
      scoreRecorder.roll(10);
    };
    expect(scorecard).toEqual([[10],[10],[10],[10],[10],[10],[10],[10],[10],[10,10,10]])
  })
});
