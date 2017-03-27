'use strict';

describe ("Frame", function() {
  var frame;
  var game;

  beforeEach(function(){
    frame = new Frame();
  });

  describe("First Bowl", function() {

    it("first bowl is saved into the frame", function() {
      frame.inputBowls(6, 3)
      expect(frame.totalFrame).toEqual([6, 3]);
    });

    it("wont allow score to be over 10", function() {
      expect(function(){frame.inputBowls(9, 3);}).toThrowError("Score cannot be over 10");
    });

    it("checks if IS strike", function() {
      frame.inputBowls(10, 0)
      expect(frame.isStrike()).toEqual(true);
    });

    it("checks if NOT strike", function() {
      frame.inputBowls(5, 5);
      expect(frame.isStrike()).toEqual(false);
    });

    it("check if IS spare", function() {
      frame.inputBowls(5, 5)
      expect(frame.isSpare()).toEqual(true);
    });

    it("check if NOT spare", function() {
      frame.inputBowls(5, 1)
      expect(frame.isSpare()).toEqual(false);
    });

    it("puts both rolls into the frame", function() {
      frame.inputBowls(7,1)
      expect(frame.totalFrame).toEqual([7,1]);
    });

    it("check the score of the frame", function() {
      frame.inputBowls(5, 1)
      expect(frame.totalFrameScore()).toEqual(6);
    });

    it("returns the first roll of the frame", function() {
      frame.inputBowls(5, 1)
      expect(frame._firstRoll()).toEqual(5);
    });
  });
});
