"use strict"

describe("Game Controller", function() {

  var gameController,
      FrameModelMock,
      frameModelInstanceMock,
      GameViewMock,
      gameViewInstanceMock;

  beforeEach(function() {
    FrameModelMock = {new: null}
    frameModelInstanceMock = {}
    spyOn(FrameModelMock, 'new').and.returnValue(frameModelInstanceMock)
    // spyOn(frameModelIntanceMock 'addRoll')

    GameViewMock = {new: null}
    gameViewInstanceMock = {}
    spyOn(GameViewMock, 'new').and.returnValue(gameViewInstanceMock)
    // spyOn(gameViewIntanceMock 'updateScore')

    gameController = new GameController(FrameModelMock, GameViewMock)
  })

  describe("::new", function() {
    it("Should create new GameController instance", function() {
      expect(gameController instanceof GameController).toBe(true)
    })
  })





})
