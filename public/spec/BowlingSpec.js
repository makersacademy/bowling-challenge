describe("Scorecard", function() {

  var scorecard;

  beforeEach (function(){
    scorecard = new BowlingScarecard;
  });

  it('user can roll all ones', function(){
    for (var i = 0; i < 20; i++) {
      scorecard.roll(1);
    }
    expect(scorecard.total).toEqual(20);

  });

});
