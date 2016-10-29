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
    if (round.strike === true) {
      expect(round.firstRoll.startingPins).toEqual(10);
      // maybe add some strike case expectations?
    } else {
      round.createSecondRoll();
      expect(round.firstRoll.startingPins).toEqual(10);
      expect(round.secondRoll.startingPins).toEqual(round.firstRoll.finishingPins);
    }
  });

  it('has the correct number of finishing pins for both rolls', function() {
      round.createFirstRoll();
      var firstRollPins = round.firstRoll.finishingPins
      expect(firstRollPins).toBeGreaterThan(-1);
      expect(firstRollPins).toBeLessThan(11);

      if (round.strike !== true) {
        round.createSecondRoll();
        var secondRollPins = round.secondRoll.finishingPins
        expect(secondRollPins).not.toBeGreaterThan(firstRollPins);
      }
  });

});
