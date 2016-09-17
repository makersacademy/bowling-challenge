describe('Round', function() {
  var round;

  beforeEach(function() {
    round = new Round();
  });

  it('creates a new roll with ten starting pins', function(){
    round.createFirstRoll();
    expect(round.firstRoll.startingPins).toEqual(10);
  });

  it('has the correct number of starting pins for both rolls', function(){
    round.createFirstRoll();
    round.createSecondRoll();
    expect(round.firstRoll.startingPins).toEqual(10);
    expect(round.secondRoll.startingPins).toEqual(round.firstRoll.finishingPins);
  });


  it('has the correct number of finishing pins for both rolls', function() {

      round.createFirstRoll();
      round.createSecondRoll();
      firstRollPins = round.firstRoll.finishingPins
      secondRollPins = round.secondRoll.finishingPins

      expect(firstRollPins).toBeGreaterThan(-1);
      expect(firstRollPins).toBeLessThan(11);
      expect(secondRollPins).not.toBeGreaterThan(firstRollPins);

  });



});
