describe("Bowling", function() {

  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  it('initialise default settings', function() {
    expect(bowling.getRunningTotal()).toEqual(0);
    expect(bowling.getScore()).toEqual(0);
    expect(bowling.getFrame()).toEqual(1);
    expect(bowling.getPins()).toEqual(10)
    expect(bowling.getRoll()).toEqual(1);
    expect(bowling.getBonuses()).toEqual(0);
  });

  it('counts pins knocked down', function() {
    bowling.knockDownPins(4);
    expect(bowling.getScore()).toEqual(4);
    expect(bowling.getPins()).toEqual(6)
    bowling.knockDownPins(4);
    expect(bowling.getScore()).toEqual(4);
    expect(bowling.getPins()).toEqual(2);
  });

  it('updates running total if no strike or spare', function() {
    bowling.knockDownPins(4);
    bowling.updateRunningTotal();
    bowling.knockDownPins(4);
    bowling.updateRunningTotal();
    expect(bowling.getRunningTotal()).toEqual(8);
  });

  it('updates running total if a spare', function() {
    bowling.addBonuses(1);
    bowling.knockDownPins(4);
    bowling.updateRunningTotal();
    bowling.knockDownPins(4);
    bowling.updateRunningTotal();
    expect(bowling.getRunningTotal()).toEqual(12);
  });

  it('updates running total if a strike', function() {
    bowling.addBonuses(2);
    bowling.knockDownPins(4);
    bowling.updateRunningTotal();
    bowling.knockDownPins(4);
    bowling.updateRunningTotal();
    expect(bowling.getRunningTotal()).toEqual(16);
  });

  it('recognises strikes', function() {
    spyOn(bowling, 'getPins').and.returnValue(0);
    spyOn(bowling, 'getRoll').and.returnValue(1);
    expect(bowling.isAStrike()).toEqual(true);
  });

  it('recognises spares', function() {
    spyOn(bowling, 'getPins').and.returnValue(0);
    spyOn(bowling, 'getRoll').and.returnValue(2);
    expect(bowling.isASpare()).toEqual(true);
  });

  it('records strikes', function() {
    spyOn(bowling, 'getPins').and.returnValue(0);
    spyOn(bowling, 'getRoll').and.returnValue(1);
    bowling.recordBonuses();
    expect(bowling.getBonuses()).toEqual(2);
  });

  it('records spares', function() {
    spyOn(bowling, 'getPins').and.returnValue(0);
    spyOn(bowling, 'getRoll').and.returnValue(2);
    bowling.recordBonuses();
    expect(bowling.getBonuses()).toEqual(1);
  });

  it('updates the frame and roll when a strike', function() {
    spyOn(bowling, 'isAStrike').and.returnValue(true);
    bowling.updateRollAndFrame();
    expect(bowling.getFrame()).toEqual(2);
    expect(bowling.getRoll()).toEqual(1);
  });

  it('updates the frame and roll after second roll', function() {
    bowling.knockDownPins(4);
    bowling.updateRollAndFrame();
    bowling.knockDownPins(4);
    bowling.updateRollAndFrame();
    expect(bowling.getFrame()).toEqual(2);
    expect(bowling.getRoll()).toEqual(1);
  });

});
