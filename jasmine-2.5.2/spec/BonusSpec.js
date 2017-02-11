describe("Bonus", function() {
  var bonus;

  beforeEach(function() {
    bonus = new Bonus();
  });
  it('initialises default settings', function() {
    expect(bonus.getStrikeOrSpare()).toEqual("");
    expect(bonus.getNextMultiplier()).toEqual(0);
    expect(bonus.getNextButOneMultiplier()).toEqual(0);
  });
  it('records strikes', function() {
    bonus.recordStrikeOrSpare(1);
    expect(bonus.getStrikeOrSpare()).toEqual("Strike");
    expect(bonus.getNextMultiplier()).toEqual(1);
    expect(bonus.getNextButOneMultiplier()).toEqual(1);
  });
  it('records spares', function() {
    bonus.recordStrikeOrSpare(2);
    expect(bonus.getStrikeOrSpare()).toEqual("Spare");
    expect(bonus.getNextMultiplier()).toEqual(1);
    expect(bonus.getNextButOneMultiplier()).toEqual(0);
  });
  it('resets used bonuses', function() {
    bonus.recordStrikeOrSpare(1);
    bonus.useBonuses();
    expect(bonus.getNextMultiplier()).toEqual(1);
    expect(bonus.getNextButOneMultiplier()).toEqual(0);
  });
});
