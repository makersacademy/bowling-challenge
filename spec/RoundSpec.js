'use-strict';

describe("Round", function() {

  var round;
  var firstRoll;
  var secondRoll;

  beforeEach(function() {
    round = new Round();
    firstRoll = jasmine.createSpyObj("firstRoll", ['showPinsHit']);
    secondRoll = jasmine.createSpyObj("secondRoll", ['showPinsHit']);
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

    it("should have the strike set to false", function() {
      expect(round.showStrike()).toEqual(false);
    });

  });

  describe("After one 'regular' roll ... ", function() {

    beforeEach(function(){
        firstRoll.showPinsHit.and.returnValue(2);
      });

    it("rolls should have 1 object", function(){
      round.roll();
      expect(round._rolls.length).toEqual(1);
    });

    it("should update the pinsLeft", function () {
      round.roll(firstRoll);
      expect(round.showPinsLeft()).toEqual(8);
    });

  });

  describe("After two 'regular' rolls ... ", function() {

    beforeEach(function(){
        firstRoll.showPinsHit.and.returnValue(2);
        secondRoll.showPinsHit.and.returnValue(5);
      });

    it("rolls should have 2 objects", function(){
      round.roll(firstRoll);
      round.roll(secondRoll);
      expect(round._rolls.length).toEqual(2);
    });

    it("should update the pinsLeft", function () {
      round.roll(firstRoll);
      round.roll(secondRoll);
      expect(round.showPinsLeft()).toEqual(3);
    });

  });

  describe("After a strike ... ", function() {

    beforeEach(function(){
        firstRoll.showPinsHit.and.returnValue(10);
      });

    it("should update the pinsLeft", function () {
      round.roll(firstRoll);
      expect(round.showPinsLeft()).toEqual(0);
      expect(round.showStrike()).toEqual(true);
    });

  });

});
