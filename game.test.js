const Game = require('./game')

describe("less than ten frames have been added", () => {
  it("adds a frame to the list of frames", () => {
    const game = new Game
    game.addFrame(2,3)
    expect(game.frames.length).toEqual(1)
  })
})
describe("10 frames have been added", () => {
  it("does not add another frame", () => {
    const game = new Game
    game.addFrame(1,1)
    game.addFrame(1,1)
    game.addFrame(1,1)
    game.addFrame(1,1)
    game.addFrame(1,1)
    game.addFrame(1,1)
    game.addFrame(1,1)
    game.addFrame(1,1)
    game.addFrame(1,1)
    game.addFrame(1,1)
    let result = game.addFrame(7,2)
    expect(game.frames.length).toEqual(10)
    expect(result).toEqual("The game has finished")
  })
})
describe("calculates the user's score so far when", () => {
  it("one frame has been played with no strikes or spares", () => {
    const game = new Game
    game.addFrame(1,1)
    expect(game.calculateCurrentScore()).toEqual(2)
  })
  it('two frames have been played with no strikes or spares', () => {
    const game = new Game
    game.addFrame(1,1)
    game.addFrame(1,1)
    expect(game.calculateCurrentScore()).toEqual(4)
  })
  it("two frames have been added with the first being a spare", () => {
    const game = new Game
    game.addFrame(9,1)
    game.addFrame(1,1)
    expect(game.calculateCurrentScore()).toEqual(13)
  })
  it("two frames have been added with the first being a strike", () => {
    const game = new Game
    game.addFrame(10,0)
    game.addFrame(1,1)
    expect(game.calculateCurrentScore()).toEqual(14)
  })
  it("three frames have been added with the first and second frames being strikes", () => {
    const game = new Game
    game.addFrame(10,0)
    game.addFrame(10,0)
    game.addFrame(1,1)
    expect(game.calculateCurrentScore()).toEqual(35)
  })
  it("three frames with first frame being strike and second frame being spare", () => {
    const game = new Game
    game.addFrame(10,0)
    game.addFrame(9,1)
    game.addFrame(1,1)
    expect(game.calculateCurrentScore()).toEqual(33)
  })
  it("three frames with only third frame being a strike", () => {
    const game = new Game
    game.addFrame(1,1)
    game.addFrame(1,1)
    game.addFrame(10,0)
    expect(game.calculateCurrentScore()).toEqual(14)
  })
  it("three frames with only third frame being a spare", () => {
    const game = new Game
    game.addFrame(1,1)
    game.addFrame(1,1)
    game.addFrame(9,1)
    expect(game.calculateCurrentScore()).toEqual(14)
  })
  it("completes a game with no strikes or spares", () => {
    const game = new Game
    game.addFrame(1,1)
    game.addFrame(1,1)
    game.addFrame(1,1)
    game.addFrame(1,1)
    game.addFrame(1,1)
    game.addFrame(1,1)
    game.addFrame(1,1)
    game.addFrame(1,1)
    game.addFrame(1,1)
    game.addFrame(1,1)
    expect(game.calculateCurrentScore()).toEqual(20)
  })
  it("completes the game with the 10th frame being a strike", () => {
    const game = new Game
    game.addFrame(1,1)
    game.addFrame(1,1)
    game.addFrame(1,1)
    game.addFrame(1,1)
    game.addFrame(1,1)
    game.addFrame(1,1)
    game.addFrame(1,1)
    game.addFrame(1,1)
    game.addFrame(1,1)
    game.addFrame(10,1,1)
    expect(game.frames.length).toEqual(10)
    expect(game.calculateCurrentScore()).toEqual(30)
  })
  it("completes the game with the 10th frame being a spare", () => {
    const game = new Game
    game.addFrame(1,1)
    game.addFrame(1,1)
    game.addFrame(1,1)
    game.addFrame(1,1)
    game.addFrame(1,1)
    game.addFrame(1,1)
    game.addFrame(1,1)
    game.addFrame(1,1)
    game.addFrame(1,1)
    game.addFrame(9,1,1)
    expect(game.frames.length).toEqual(10)
    expect(game.calculateCurrentScore()).toEqual(29)
  })
  it("completes a perfect game", () => {
    const game = new Game
    game.addFrame(10,0)
    game.addFrame(10,0)
    game.addFrame(10,0)
    game.addFrame(10,0)
    game.addFrame(10,0)
    game.addFrame(10,0)
    game.addFrame(10,0)
    game.addFrame(10,0)
    game.addFrame(10,0)
    game.addFrame(10,10,10)
    expect(game.frames.length).toEqual(10)
    expect(game.calculateCurrentScore()).toEqual(300)
  })
  it("completes a gutter game", () => {
    const game = new Game
    game.addFrame(0,0)
    game.addFrame(0,0)
    game.addFrame(0,0)
    game.addFrame(0,0)
    game.addFrame(0,0)
    game.addFrame(0,0)
    game.addFrame(0,0)
    game.addFrame(0,0)
    game.addFrame(0,0)
    game.addFrame(0,0,0)
    expect(game.frames.length).toEqual(10)
    expect(game.calculateCurrentScore()).toEqual(0)
  })
})