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

  it('knows when game is complete', function() {
    for(i = 1; i <= 20; i++) { bowlingCard.enterRoll(3) }
    expect(bowlingCard.complete).toEqual(true);
  });

  it('does not allow rolls to be added when complete', function() {
    for(i = 1; i <= 20; i++) { bowlingCard.enterRoll(3) }
    expect(function() {bowlingCard.enterRoll(3)}).toThrow('Card already complete')

  });

  it('calculates total for whole game', function (){
    bowlingCard.enterRoll(1);
    bowlingCard.enterRoll(4);
    bowlingCard.enterRoll(4);
    bowlingCard.enterRoll(5);
    bowlingCard.enterRoll(6);
    bowlingCard.enterRoll(4);
    bowlingCard.enterRoll(5);
    bowlingCard.enterRoll(5);
    bowlingCard.enterRoll(10);
    bowlingCard.enterRoll(0);
    bowlingCard.enterRoll(1);
    bowlingCard.enterRoll(7);
    bowlingCard.enterRoll(3);
    bowlingCard.enterRoll(6);
    bowlingCard.enterRoll(4);
    bowlingCard.enterRoll(10);
    bowlingCard.enterRoll(2);
    bowlingCard.enterRoll(8);
    // debugger
    bowlingCard.enterRoll(6);
    expect(bowlingCard.totalScore).toEqual(133);
  });

  it('calculates total for gutter game', function(){
    for(i = 1; i <= 20; i++) { bowlingCard.enterRoll(0) }
    expect(bowlingCard.totalScore).toEqual(0);
  });

  it('calculates total for perfect game', function() {
    for(i = 1; i <= 12; i++) { bowlingCard.enterRoll(10) }
expect(bowlingCard.totalScore).toEqual(300);
  });
});
