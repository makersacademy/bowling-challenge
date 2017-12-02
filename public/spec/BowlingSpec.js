describe("Scorecard", function() {

  var scorecard;

  beforeEach (function(){
    scorecard = new BowlingScorecard;
  });

  it('user can roll all ones', function(){
    for (var i = 0; i < 20; i++) {
      scorecard.roll(1);
    }
    expect(scorecard.total).toEqual(20);
  });

  it('user can roll all zeros - Gutter Game', function(){
    for (var i = 0; i < 20; i++) {
      scorecard.roll(0);
    }
    expect(scorecard.total).toEqual(0);
  });

  it('user can roll a spare', function(){
    scorecard.roll(6);
    scorecard.roll(4);
    scorecard.roll(2);
    for (var i = 0; i < 17; i++) {
      scorecard.roll(0);
    }
    expect(scorecard.total).toEqual(14);
  });

});
