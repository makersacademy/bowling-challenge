'use-strict';

describe("Frame", function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe("At the start the frame ...", function() {

    it("should have 10 pins", function() {
      expect(frame.showPinsLeft()).toEqual(10);
    });

    it("should have 2 rolls remaining", function() {
      expect(frame.showRollsLeft()).toEqual(2);
    });

    it("should have a score of 0", function() {
      expect(frame.showScore()).toEqual(0);
    });

    it("should have the bonus set to false", function() {
      expect(frame.showBonus()).toEqual(false);
    });

  });

  describe("After one roll ... ", function() {

    it("should reduce the rollsLeft by 1", function(){
      frame.roll();
      expect(frame.showRollsLeft()).toEqual(1);
    });

    it("should update the pinsLeft", function () {
      frame.roll();
      expect(frame.showPinsLeft()).toEqual(4);
    });

  })

});
