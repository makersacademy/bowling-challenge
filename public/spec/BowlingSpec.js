describe("Scorecard", function() {

  var scorecard;

  beforeEach (function(){
    scorecard = new BowlingScorecard();
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

  it('user can roll a strike', function(){
    scorecard.roll(10);
    scorecard.roll(4);
    scorecard.roll(2);
    for (var i = 0; i < 16; i++) {
      scorecard.roll(0);
    }
    expect(scorecard.total).toEqual(22);
  });

  it('user can roll multiple strikes in a row', function(){
    for (var i = 0; i < 2; i++) {
      scorecard.roll(10);
    }
    scorecard.roll(2);
    scorecard.roll(3);
    for (i = 0; i < 14; i++) {
      scorecard.roll(0);
    }
    expect(scorecard.total).toEqual(42);
  });

  it('user can roll 3 strikes in a row', function(){
    for (var i = 0; i < 3; i++) {
      scorecard.roll(10);
    }
    scorecard.roll(2);
    scorecard.roll(3);
    for (i = 0; i < 12; i++) {
      scorecard.roll(0);
    }
    expect(scorecard.total).toEqual(72);
  });

  it('user can roll a perfect game', function(){
    for (var i = 0; i < 12; i++) {
      scorecard.roll(10);
    }
    expect(scorecard.total).toEqual(300);
  });

  it('user can roll a spare on last frame', function(){
    for (var i = 0; i < 18; i++) {
      scorecard.roll(0);
    }
      scorecard.roll(6);
      scorecard.roll(4);
      scorecard.roll(2);
    expect(scorecard.total).toEqual(12);
  });
  it('user can roll a strike on last frame', function(){
    for (var i = 0; i < 18; i++) {
      scorecard.roll(0);
    }
      scorecard.roll(10);
      scorecard.roll(4);
      scorecard.roll(2);
    expect(scorecard.total).toEqual(16);
  });
});
