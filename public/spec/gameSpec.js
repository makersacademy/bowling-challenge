"use strict";

describe("Game", function() {
  var game;
  var frame;
  var aRoll;
  var spyFrame;
  beforeEach(function() {
    game = new Game();
    frame = new Frame();
    aRoll = 4;
    spyFrame = jasmine.createSpyObj("spyFrame",{
      'isStrike': false,
      'isSpare': false, 
      'getBasePoints': (aRoll + aRoll),
      '_rolls': [aRoll, aRoll]
    });
  });
  describe("getTotalPoints() returns total points for frame", function() {
    it("when no bonus points accrued", function() {
      spyFrame.getBasePoints.and.returnValue(aRoll + aRoll);
      game.add(spyFrame);
      expect(game.getTotalPoints()).toBe(aRoll * 2);
      game.add(spyFrame);
      expect(game.getTotalPoints()).toBe(aRoll * 4);
    });
    it("when there is a spare", function() {
      var anotherRoll = 5;
      var spareSpyFrame = jasmine.createSpyObj("spareSpyFrame",{
        'isStrike': false,
        'isSpare': true,
        'getBasePoints': (anotherRoll + anotherRoll),
        '_rolls': [anotherRoll, anotherRoll]
      });
      
      // spareSpyFrame.isSpare.and.returnValue(true);
      // spareSpyFrame.getBasePoints.and.returnValue(anotherRoll + anotherRoll);
      // spyFrame.getBasePoints.and.returnValue(aRoll + aRoll);
      // spyFrame._rolls.and.returnValue([aRoll, aRoll])
      // spyOn(spyFrame._rolls[0]).and.returnValue(aRoll);

      // game.add(spareSpyFrame);
      // game.add(spyFrame);

      // spyFrame._rolls[0] = jasmine.createSpy("_rolls[0] spy").and.returnValue(aRoll);

      var anotherFrame = new Frame();
      
      anotherFrame.add(anotherRoll);
      anotherFrame.add(anotherRoll);
      game.add(anotherFrame);
      frame.add(aRoll);
      frame.add(aRoll);
      game.add(frame);
      expect(game.getTotalPoints()).toBe(2 * anotherRoll + 3 * aRoll);
    });
    it("when there is a strike", function() {
      var strikeRoll = 10;
      frame.add(strikeRoll);
      game.add(frame);
      var anotherFrame = new Frame();
      anotherFrame.add(aRoll);
      anotherFrame.add(aRoll);
      game.add(anotherFrame);
      expect(game.getTotalPoints()).toBe(strikeRoll + 4 * aRoll);
    });
  });
});
