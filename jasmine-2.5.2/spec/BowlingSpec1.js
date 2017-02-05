describe("Bowling", function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  it('initialises default settings', function() {
    expect(bowling.getFrame()).toEqual(1);
    expect(bowling.getRoll()).toEqual(1);
    expect(bowling.getHits()).toEqual(0);
    expect(bowling.getBonus()).toEqual(0);
    expect(bowling.getStrikeOrSpare()).toEqual("");
    expect(bowling.getRunningTotal()).toEqual(0);
  });

  it('sets number of hits and updates pins', function() {
    bowling.setHits(6);
    bowling.updatePins();
    expect(bowling.getHits()).toEqual(6);
    expect(bowling.getPins()).toEqual(4);
    bowling.setHits(6);
    bowling.updatePins();
    expect(bowling.getHits()).toEqual(4);
    expect(bowling.getPins()).toEqual(0);
  });

  it('sets bonus when there is one', function() {
    spyOn(bowling, 'getExtra').and.returnValue(2);
    bowling.setHits(6);
    bowling.updateBonus();
    expect(bowling.getExtra()).toEqual(2);
    expect(bowling.getBonus()).toEqual(12);
  })
  it('sets no bonus when there isn\'t one', function() {
    spyOn(bowling, 'getExtra').and.returnValue(0);
    bowling.setHits(6);
    bowling.updateBonus();
    expect(bowling.getBonus()).toEqual(0);
  });
  it('sets strikes', function() {
    spyOn(bowling, 'getPins').and.returnValue(0);
    spyOn(bowling, 'getRoll').and.returnValue(1);
    bowling.updateStrikeOrSpare();
    expect(bowling.getStrikeOrSpare()).toEqual("Strike")
  });
  it('sets spares', function() {
    spyOn(bowling, 'getPins').and.returnValue(0);
    spyOn(bowling, 'getRoll').and.returnValue(2);
    bowling.updateStrikeOrSpare();
    expect(bowling.getStrikeOrSpare()).toEqual("Spare")
  });
  it('updates running total', function() {
    spyOn(bowling, 'getHits').and.returnValue(43);
    spyOn(bowling, 'getBonus').and.returnValue(20);
    bowling.updateRunningTotal();
    expect(bowling.getRunningTotal()).toEqual(63);
  });

});
