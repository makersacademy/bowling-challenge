"use strict"

describe("Game Controller", function() {

  var gameView,
      showSpy;

  beforeEach(function() {
    gameView = new GameView()
  })

  describe("::new", function() {
    it("Should create new GameView instance", function() {
      expect(gameView instanceof GameView).toBe(true)
    })
  })

  describe(".startGame", function() {
    it("Should remove start game button from view", function() {

    })
  })

  describe(".updateFrame", function() {
    it("Should update frame score", function() {

    })
  })





})
