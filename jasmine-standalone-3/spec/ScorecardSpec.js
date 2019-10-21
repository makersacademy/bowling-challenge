describe("Scorecard", function() {
  var scorecard;


  beforeEach(function() {
    scorecard = new Scorecard
  });

  it("shows a total score of zero in a gutter game", function() {
    var times = 20;
    for(var i=0; i < times; i ++){
      scorecard.roll(0);
    }
    expect(scorecard.totalScore).toEqual(0);
  });

  it("shows a total score of 300 in a perfect game", function() {
    var times = 12;
    for(var i=0; i < times; i ++){
      scorecard.calculateFrame(10);
    }
    expect(scorecard.totalScore).toEqual(300);
  });

  // describe("", function() {
  //
  // });


});
