'use strict';

describe ("Frame", function() {
  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  describe("First Bowl", function() {

    it("first bowl is saved into the frame", function() {
      frame.inputFirstBowl(6)
      expect(frame.totalFrame).toEqual([6]);
    });

    it("wont allow score to be over 10", function() {
      expect(function(){frame.inputFirstBowl(11);}).toThrowError("Score cannot be over 10");
    });

    it("checks if strike", function() {
      expect(frame.isStrike(10)).toEqual(true);
      expect(frame.isStrike(5)).toEqual(false);
    });
  });

  describe("Second Bowl", function() {

    it("second bowl is saved into the frame", function() {
      frame.inputSecondBowl(2)
      expect(frame.totalFrame).toEqual([2]);
    });

    it("wont allow score to be over 10", function() {
      expect(function(){frame.inputSecondBowl(11);}).toThrowError("Score cannot be over 10");
    });

    it("puts both rolls into the frame", function() {
      frame.inputFirstBowl(7)
      frame.inputSecondBowl(1)
      expect(frame.totalFrame).toEqual([7,1]);
    });

    it("check if IS spare", function() {
      // spyOn(this.totalFrame).andReturn([5,5])
      frame.inputFirstBowl(5)
      frame.inputSecondBowl(5)
      expect(frame.isSpare()).toEqual(true);
    });

    it("check if NOT spare", function() {
      frame.inputFirstBowl(1)
      frame.inputSecondBowl(5)
      expect(frame.isSpare()).toEqual(false);
    });
  });
});
