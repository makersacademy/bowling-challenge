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

  it('updates running total without a strike or spare', function() {
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
});
