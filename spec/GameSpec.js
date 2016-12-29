/*jslint node: true */
'use strict';

describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("#rollNumber", function() {
    it("tells the frame to return its roll number", function() {
      var mockFrame = jasmine.createSpyObj("frame",["rollNumber"])
      game.frames[0] = mockFrame
      game.rollNumber()
      expect(mockFrame.rollNumber).toHaveBeenCalled()
    })
  })

  describe("#isOver", function() {
    it("knows when the game is over", function() {
      var mockFrame = jasmine.createSpyObj("frame",["isPointsComplete"])
      mockFrame.isPointsComplete.and.returnValue(true)
      game.frames[9] = mockFrame
      expect(game.isOver()).toEqual(true)
    })
  })

});
