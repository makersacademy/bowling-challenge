describe("Score", function() {
  var score;

  beforeEach(function() {
    score = new Score();
  });
  it('initialises default settings', function() {
    expect(score.getHits()).toEqual(0);
    expect(score.getBonus()).toEqual(0);
    expect(score.getRollTotal()).toEqual(0);
    expect(score.getRunningTotal()).toEqual(0)
  });
  it('records current hits and bonus', function() {
    score.setHits(4);
    score.setBonus(2);
    expect(score.getHits()).toEqual(4);
    expect(score.getBonus()).toEqual(8);
  });
  it('updates roll total', function() {
    spyOn(score, 'getHits').and.returnValue(6);
    spyOn(score, 'getBonus').and.returnValue(12);
    score.addHitsToRollTotal();
    score.addBonusToRollTotal();
    expect(score.getRollTotal()).toEqual(18);
  });
  it('updates running total', function() {
    spyOn(score, 'getHits').and.returnValue(4);
    spyOn(score, 'getBonus').and.returnValue(4);
    score.addHitsToRollTotal();
    score.addBonusToRollTotal();
    score.addRollTotalToRunningTotal();
    expect(score.getRunningTotal()).toEqual(8);
  });
});
