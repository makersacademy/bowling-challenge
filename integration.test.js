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
    scoreboard.addFrame(new Frame(1, 8))
    scoreboard.addFrame(new Frame(2, 7))
    scoreboard.addFrame(new Frame(3, 6))
    scoreboard.addFrame(new Frame(4, 5))
    scoreboard.addFrame(new Frame(5, 4))
    scoreboard.addFrame(new Frame(6, 3))
    scoreboard.addFrame(new Frame(7, 2))
    scoreboard.addFrame(new Frame(8, 1))
    scoreboard.addFrame(new Frame(4, 4))
    scoreboard.addFrame(new Frame(3, 5))
    expect(scoreboard.total()).toBe(88)
    expect(scoreboard.frameCount()).toBe(10)
  })


})

describe("a bonus is added if a spare is bowled", () => {

  it("gives a bonus after the first frame is a spare and the second frame is bowled", () => {
    const scoreboard = new Scoreboard
    scoreboard.addFrame(new Frame(2, 8))
    scoreboard.addFrame(new Frame(3, 3))
    expect(scoreboard.total()).toBe(19)
    expect(scoreboard.frameCount()).toBe(2)
  })

  it("gives several bonus' if multiple spares bowled", () => {
    const scoreboard = new Scoreboard   
    scoreboard.addFrame(new Frame(2, 8))
    scoreboard.addFrame(new Frame(3, 3))
    scoreboard.addFrame(new Frame(1, 7))
    scoreboard.addFrame(new Frame(4, 4))
    scoreboard.addFrame(new Frame(5, 5))
    scoreboard.addFrame(new Frame(6, 2))
    scoreboard.addFrame(new Frame(5, 3))
    scoreboard.addFrame(new Frame(9, 1))
    scoreboard.addFrame(new Frame(5, 3))
    scoreboard.addFrame(new Frame(5, 3)  )
    expect(scoreboard.total()).toBe(98)
    expect(scoreboard.frameCount()).toBe(10)
  })
})

describe("a bonus is added if a strike is bowled", () => {
  it("gives a bonus after the first frame is a strike and the second frame is bowled", () => {
    const scoreboard = new Scoreboard
    scoreboard.addFrame(new Frame(10, 0))
    scoreboard.addFrame(new Frame(3, 3))
    expect(scoreboard.total()).toBe(22)
    expect(scoreboard.frameCount()).toBe(2)
  })

  it("gives several bonus' if multiple strikes bowled", () => {
    const scoreboard = new Scoreboard   
    scoreboard.addFrame(new Frame(10, 0))
    scoreboard.addFrame(new Frame(3, 3))
    scoreboard.addFrame(new Frame(1, 7))
    scoreboard.addFrame(new Frame(4, 4))
    scoreboard.addFrame(new Frame(10, 0))
    scoreboard.addFrame(new Frame(6, 2))
    scoreboard.addFrame(new Frame(5, 3))
    scoreboard.addFrame(new Frame(10, 0))
    scoreboard.addFrame(new Frame(5, 3))
    scoreboard.addFrame(new Frame(5, 3))
    expect(scoreboard.total()).toBe(106)
    expect(scoreboard.frameCount()).toBe(10)
  })
})

describe("mix of strikes and spares bowled", () => {
  it("gives bonus' and correct final score", () => {
    const scoreboard = new Scoreboard   
    scoreboard.addFrame(new Frame(1,4))
    scoreboard.addFrame(new Frame(4,5))
    scoreboard.addFrame(new Frame(6,4))
    scoreboard.addFrame(new Frame(5,5))
    scoreboard.addFrame(new Frame(10,0))
    scoreboard.addFrame(new Frame(0,1))
    scoreboard.addFrame(new Frame(7,3))
    scoreboard.addFrame(new Frame(6,4))
    scoreboard.addFrame(new Frame(10,0))
    scoreboard.addFrame(new Frame(5,3))
    expect(scoreboard.total()).toBe(123)
    expect(scoreboard.frameCount()).toBe(10)
  })
})

describe("final frame has three rolls", () => {
  it("adds a single roll bonus if spare", () => {
    const scoreboard = new Scoreboard
    scoreboard.addFrame(new Frame(1,4))
    scoreboard.addFrame(new Frame(4,5))
    scoreboard.addFrame(new Frame(6,4))
    scoreboard.addFrame(new Frame(5,5))
    scoreboard.addFrame(new Frame(10,0))
    scoreboard.addFrame(new Frame(0,1))
    scoreboard.addFrame(new Frame(7,3))
    scoreboard.addFrame(new Frame(6,4))
    scoreboard.addFrame(new Frame(10,0))
    scoreboard.addFrame(new Frame(2,8,6))
    expect(scoreboard.total()).toBe(133)
    expect(scoreboard.frameCount()).toBe(10)
  })

  it("adds a double roll bonus if strike", () => {
    const scoreboard = new Scoreboard   
    scoreboard.addFrame(new Frame(1,4))
    scoreboard.addFrame(new Frame(4,5))
    scoreboard.addFrame(new Frame(6,4))
    scoreboard.addFrame(new Frame(5,5))
    scoreboard.addFrame(new Frame(10,0))
    scoreboard.addFrame(new Frame(0,1))
    scoreboard.addFrame(new Frame(7,3))
    scoreboard.addFrame(new Frame(6,4))
    scoreboard.addFrame(new Frame(10,0))
    scoreboard.addFrame(new Frame(10,8,2))
    expect(scoreboard.total()).toBe(145)
    expect(scoreboard.frameCount()).toBe(10)
  })

  it("adds final frame score of 30 if all strikes", () => {
    const scoreboard = new Scoreboard   
    scoreboard.addFrame(new Frame(1,4))
    scoreboard.addFrame(new Frame(4,5))
    scoreboard.addFrame(new Frame(6,4))
    scoreboard.addFrame(new Frame(5,5))
    scoreboard.addFrame(new Frame(10,0))
    scoreboard.addFrame(new Frame(0,1))
    scoreboard.addFrame(new Frame(7,3))
    scoreboard.addFrame(new Frame(6,4))
    scoreboard.addFrame(new Frame(10,0))
    scoreboard.addFrame(new Frame(10,10,10))
    expect(scoreboard.calculateLastFrame()).toBe(30)
    expect(scoreboard.total()).toBe(157)
    expect(scoreboard.frameCount()).toBe(10)
  })
})

describe("perfect game is scored", () => {
  it("has a grand total of 300", () => {
    const scoreboard = new Scoreboard
    scoreboard.addFrame(new Frame(10,0))
    scoreboard.addFrame(new Frame(10,0))
    scoreboard.addFrame(new Frame(10,0))
    scoreboard.addFrame(new Frame(10,0))
    scoreboard.addFrame(new Frame(10,0))
    scoreboard.addFrame(new Frame(10,0))
    scoreboard.addFrame(new Frame(10,0))
    scoreboard.addFrame(new Frame(10,0))
    scoreboard.addFrame(new Frame(10,0))
    scoreboard.addFrame(new Frame(10,10,10))
    expect(scoreboard.total()).toBe(300)
    expect(scoreboard.calculateLastFrame()).toBe(30)
    expect(scoreboard.frameCount()).toBe(10)
  })
})

describe("expected errors", () => {
  it("fails if a roll is greater than 10", () => {
    const scoreboard = new Scoreboard
    expect(() => {scoreboard.addFrame(new Frame(11,0))}).toThrow("A roll cannot be greater than 10");
  })

  it("fails if both rolls sum greater than 10", () => {
    const scoreboard = new Scoreboard
    expect(() => {scoreboard.addFrame(new Frame(5,6))}).toThrow("Sum of rolls cannot be greater than 10");
  })

  it("fails if the final frame is a strike first roll then two scores that add to more than 10", () => {
  const scoreboard = new Scoreboard   
  scoreboard.addFrame(new Frame(1,4))
  scoreboard.addFrame(new Frame(4,5))
  scoreboard.addFrame(new Frame(6,4))
  scoreboard.addFrame(new Frame(5,5))
  scoreboard.addFrame(new Frame(10,0))
  scoreboard.addFrame(new Frame(0,1))
  scoreboard.addFrame(new Frame(7,3))
  scoreboard.addFrame(new Frame(6,4))
  scoreboard.addFrame(new Frame(10,0))
  expect(() => {scoreboard.addFrame(new Frame(10,8,3))}).toThrow("Sum of rolls cannot be greater than 10");
  })

  it("fails if the final frame is two scores that add to more than 10", () => {
    const scoreboard = new Scoreboard   
    scoreboard.addFrame(new Frame(1,4))
    scoreboard.addFrame(new Frame(4,5))
    scoreboard.addFrame(new Frame(6,4))
    scoreboard.addFrame(new Frame(5,5))
    scoreboard.addFrame(new Frame(10,0))
    scoreboard.addFrame(new Frame(0,1))
    scoreboard.addFrame(new Frame(7,3))
    scoreboard.addFrame(new Frame(6,4))
    scoreboard.addFrame(new Frame(10,0))
    expect(() => {scoreboard.addFrame(new Frame(9,2,3))}).toThrow("Sum of rolls cannot be greater than 10");
    })
})