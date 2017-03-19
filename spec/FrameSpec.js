'use strict';

describe ("Frame", function() {
  var frame;
  var game;

  beforeEach(function(){
    frame = new Frame();
    game = new Game();
  });

  describe("First Bowl", function() {

    it("first bowl is saved into the frame", function() {
      frame.inputBowls(6, 3)
      expect(frame.totalFrame).toEqual([6, 3]);
    });

    it("wont allow score to be over 10", function() {
      expect(function(){frame.inputBowls(9, 3);}).toThrowError("Score cannot be over 10");
    });

    it("checks if strike", function() {
      expect(frame.isStrike(10)).toEqual(true);
      expect(frame.isStrike(5)).toEqual(false);
    });

    it("puts both rolls into the frame", function() {
      frame.inputBowls(7,1)
      expect(frame.totalFrame).toEqual([7,1]);
    });

    it("check if IS spare", function() {
      // spyOn(this.totalFrame).andReturn([5,5])
      frame.inputBowls(5, 5)
      expect(frame.isSpare()).toEqual(true);
    });

    it("check if NOT spare", function() {
      frame.inputBowls(5, 1)
      expect(frame.isSpare()).toEqual(false);
    });

    // it("adds the frame to game", function() {
    //   expect(frame.addToGame(this.total))
    // });
  });
});
