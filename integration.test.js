const Frame = require('./frame');
const Scoreboard = require('./scoreboard');

describe("bowler bowls a gutter game, total score is 0", () => {

  it("adds frames with a score of 0", () => {
    const scoreboard = new Scoreboard
    const frame = new Frame(0, 0)
    scoreboard.addFrame(frame)
    scoreboard.addFrame(frame)
    scoreboard.addFrame(frame)
    scoreboard.addFrame(frame)
    scoreboard.addFrame(frame)
    scoreboard.addFrame(frame)
    scoreboard.addFrame(frame)
    scoreboard.addFrame(frame)
    scoreboard.addFrame(frame)
    scoreboard.addFrame(frame)
    expect(scoreboard.total()).toBe(0)
    expect(scoreboard.frameCount()).toBe(10)
  })

})

describe("bowler bowls a scoring game, but no strikes or spares", () => {

  it("adds all frames with a score of 1, 0", () => {
    const scoreboard = new Scoreboard
    const frame = new Frame(1, 0)
    scoreboard.addFrame(frame)
    scoreboard.addFrame(frame)
    scoreboard.addFrame(frame)
    scoreboard.addFrame(frame)
    scoreboard.addFrame(frame)
    scoreboard.addFrame(frame)
    scoreboard.addFrame(frame)
    scoreboard.addFrame(frame)
    scoreboard.addFrame(frame)
    scoreboard.addFrame(frame)
    expect(scoreboard.total()).toBe(10)
    expect(scoreboard.frameCount()).toBe(10)
  })

  it("adds all frames with a score of 1, 1", () => {
    const scoreboard = new Scoreboard
    const frame = new Frame(1, 1)
    scoreboard.addFrame(frame)
    scoreboard.addFrame(frame)
    scoreboard.addFrame(frame)
    scoreboard.addFrame(frame)
    scoreboard.addFrame(frame)
    scoreboard.addFrame(frame)
    scoreboard.addFrame(frame)
    scoreboard.addFrame(frame)
    scoreboard.addFrame(frame)
    scoreboard.addFrame(frame)
    expect(scoreboard.total()).toBe(20)
    expect(scoreboard.frameCount()).toBe(10)
  })

  it("adds all frames with a score of 5, 4", () => {
    const scoreboard = new Scoreboard
    const frame = new Frame(5, 4)
    scoreboard.addFrame(frame)
    scoreboard.addFrame(frame)
    scoreboard.addFrame(frame)
    scoreboard.addFrame(frame)
    scoreboard.addFrame(frame)
    scoreboard.addFrame(frame)
    scoreboard.addFrame(frame)
    scoreboard.addFrame(frame)
    scoreboard.addFrame(frame)
    scoreboard.addFrame(frame)
    expect(scoreboard.total()).toBe(90)
    expect(scoreboard.frameCount()).toBe(10)
  })

  it("adds frames with varying scores", () => {
    const scoreboard = new Scoreboard
    let frame = new Frame(1, 8)
    scoreboard.addFrame(frame)
    frame = new Frame(2, 7)
    scoreboard.addFrame(frame)
    frame = new Frame(3, 6)
    scoreboard.addFrame(frame)
    frame = new Frame(4, 5)
    scoreboard.addFrame(frame)
    frame = new Frame(5, 4)
    scoreboard.addFrame(frame)
    frame = new Frame(6, 3)
    scoreboard.addFrame(frame)
    frame = new Frame(7, 2)
    scoreboard.addFrame(frame)
    frame = new Frame(8, 1)
    scoreboard.addFrame(frame)
    frame = new Frame(4, 4)
    scoreboard.addFrame(frame)
    frame = new Frame(3, 5)
    scoreboard.addFrame(frame)
    expect(scoreboard.total()).toBe(88)
    expect(scoreboard.frameCount()).toBe(10)
  })


})