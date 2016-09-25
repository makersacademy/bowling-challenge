'use-strict';

describe("Roll", function() {

  var roll;

  beforeEach(function() {
    spyOn(Math, "random").and.returnValue(0.5);
    roll = new Roll(6);
  });

  describe("The roll ...", function() {

    it("should record the number of pins hit", function() {
      expect(roll.showPinsHit()).toEqual(3);
    });

  });

});
