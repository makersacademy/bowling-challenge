'use strict';

describe('Frame', function () {
  var frame
  var game

  beforeEach(function () {
    frame = new Frame(game)
    game = new Game(frame)
  });

  describe("frame setup", function() {

    it("has 10 pins available to the player", function () {
      expect(frame.pinsLeft).toEqual(10)
    })

    it("player can roll first ball", function () {
      frame.firstBowl(5)
      expect(frame.bowl1).toEqual(5)
    })

    it("player can roll second ball", function () {
      frame.firstBowl(3);
      frame.secondBowl(4);
      expect(frame.pinsLeft).toEqual(3)
      expect(frame.bowl2).toEqual(4)
    })
  })
});