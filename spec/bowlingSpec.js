describe('BowlingCard', function() {
  var bowlingCard
  beforeEach(function() {
     bowlingCard = new BowlingCard();
  });

  it('knows how many pins were knocked out in first roll', function() {
    bowlingCard.enterRoll(3);
    bowlingCard.enterRoll(7);
    expect(bowlingCard.showRoll(1)).toEqual(3);
  });

  it('knows how many pins were knocked out in second roll', function() {
    bowlingCard.enterRoll(3);
    bowlingCard.enterRoll(7);
    expect(bowlingCard.showRoll(2)).toEqual(7);
  });

  it('records a strike', function() {
    bowlingCard.enterRoll(10);
    expect(bowlingCard.strike).toEqual(true);
  });

  it('records a spare', function() {
    bowlingCard.enterRoll(3);
    bowlingCard.enterRoll(7);
    expect(bowlingCard.spare).toEqual(true);
  });

  it('can add strike bonus points to the score', function() {
    bowlingCard.enterRoll(10);
    bowlingCard.enterRoll(3);
    bowlingCard.enterRoll(5);
    expect(bowlingCard.totalScore).toEqual(26);
  });

  it('can add spare bonus points to the score', function() {
    bowlingCard.enterRoll(7);
    bowlingCard.enterRoll(3);
    bowlingCard.enterRoll(5);
    bowlingCard.enterRoll(2);
    expect(bowlingCard.totalScore).toEqual(22);
  });

});
