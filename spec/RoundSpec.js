'use-strict';

describe("Round", function() {

  var round;

  beforeEach(function() {
    round = new Round();
  });

  describe("At the start the round ...", function() {

    it("should have 10 pins", function() {
      expect(round.showPinsLeft()).toEqual(10);
    });

    it("should have 0 rolls in the rolls array", function() {
      expect(round.showRolls()).toEqual([]);
    });

    it("should have a spare set to false", function() {
      expect(round.showSpare()).toEqual(false);
    });

    xit("should have the strike set to false", function() {
      expect(round.showStrike()).toEqual(false);
    });

  });

  describe("After one 'regular' roll ... ", function() {

    it("rolls should have 1 object", function(){
      round.roll();
      expect(round._rolls.length).toEqual(1);
    });

    it("should update the pinsLeft", function () {
      round.roll();
      expect(round.showPinsLeft()).toEqual(4);
    });

  });

});
