const Scoreboard = require('./scoreboard');

describe("bowler bowls a gutter game, total score is 0", () => {

  it("adds frames with a score of 0", () => {
    const scoreboard = new Scoreboard
    const mockedFrame = {
      accessFrame: () => {return [0, 0]},
      roll1: () => {return 0},
      roll2: () => {return 0},
      frameTotal: () => {return 0},
      checkForSpare: () => {return false},
      checkForStrike: () => {return false}
    }
    scoreboard.addFrame(mockedFrame)
    scoreboard.addFrame(mockedFrame)
    scoreboard.addFrame(mockedFrame)
    scoreboard.addFrame(mockedFrame)
    scoreboard.addFrame(mockedFrame)
    scoreboard.addFrame(mockedFrame)
    scoreboard.addFrame(mockedFrame)
    scoreboard.addFrame(mockedFrame)
    scoreboard.addFrame(mockedFrame)
    scoreboard.addFrame(mockedFrame)
    expect(scoreboard.total()).toBe(0)
    expect(scoreboard.frameCount()).toBe(10)
  })

})

describe("bowler bowls a scoring game, but no strikes or spares", () => {

  it("adds all frames with a score of 1, 0", () => {
    const scoreboard = new Scoreboard
    const mockedFrame = {
      accessFrame: () => {return [1, 0]},
      roll1: () => {return 1},
      roll2: () => {return 0},
      frameTotal: () => {return 1},
      checkForSpare: () => {return false},
      checkForStrike: () => {return false}
    }
    scoreboard.addFrame(mockedFrame)
    scoreboard.addFrame(mockedFrame)
    scoreboard.addFrame(mockedFrame)
    scoreboard.addFrame(mockedFrame)
    scoreboard.addFrame(mockedFrame)
    scoreboard.addFrame(mockedFrame)
    scoreboard.addFrame(mockedFrame)
    scoreboard.addFrame(mockedFrame)
    scoreboard.addFrame(mockedFrame)
    scoreboard.addFrame(mockedFrame)
    expect(scoreboard.total()).toBe(10)
    expect(scoreboard.frameCount()).toBe(10)
  })

  it("adds all frames with a score of 1, 1", () => {
    const scoreboard = new Scoreboard
    const mockedFrame = {
      accessFrame: () => {return [1, 1]},
      roll1: () => {return 1},
      roll2: () => {return 1},
      frameTotal: () => {return 2},
      checkForSpare: () => {return false},
      checkForStrike: () => {return false}
    }
    scoreboard.addFrame(mockedFrame)
    scoreboard.addFrame(mockedFrame)
    scoreboard.addFrame(mockedFrame)
    scoreboard.addFrame(mockedFrame)
    scoreboard.addFrame(mockedFrame)
    scoreboard.addFrame(mockedFrame)
    scoreboard.addFrame(mockedFrame)
    scoreboard.addFrame(mockedFrame)
    scoreboard.addFrame(mockedFrame)
    scoreboard.addFrame(mockedFrame)
    expect(scoreboard.total()).toBe(20)
    expect(scoreboard.frameCount()).toBe(10)
  })

  it("adds all frames with a score of 5, 4", () => {
    const scoreboard = new Scoreboard
    const mockedFrame = {
      accessFrame: () => {return [5, 4]},
      roll1: () => {return 5},
      roll2: () => {return 4},
      frameTotal: () => {return 9},
      checkForSpare: () => {return false},
      checkForStrike: () => {return false}
    }
    scoreboard.addFrame(mockedFrame)
    scoreboard.addFrame(mockedFrame)
    scoreboard.addFrame(mockedFrame)
    scoreboard.addFrame(mockedFrame)
    scoreboard.addFrame(mockedFrame)
    scoreboard.addFrame(mockedFrame)
    scoreboard.addFrame(mockedFrame)
    scoreboard.addFrame(mockedFrame)
    scoreboard.addFrame(mockedFrame)
    scoreboard.addFrame(mockedFrame)
    expect(scoreboard.total()).toBe(90)
    expect(scoreboard.frameCount()).toBe(10)
  })

  it("adds frames with varying scores", () => {
    const scoreboard = new Scoreboard
    const mockedFrame1 = {
      accessFrame: () => {return [5, 4]},
      roll1: () => {return 5},
      roll2: () => {return 4},
      frameTotal: () => {return 9},
      checkForSpare: () => {return false},
      checkForStrike: () => {return false}
    }
    const mockedFrame2 = {
      accessFrame: () => {return [2, 3]},
      roll1: () => {return 2},
      roll2: () => {return 3},
      frameTotal: () => {return 5},
      checkForSpare: () => {return false},
      checkForStrike: () => {return false}
    }
    scoreboard.addFrame(mockedFrame1)
    scoreboard.addFrame(mockedFrame2)
    scoreboard.addFrame(mockedFrame1)
    scoreboard.addFrame(mockedFrame2)
    scoreboard.addFrame(mockedFrame1)
    scoreboard.addFrame(mockedFrame2)
    scoreboard.addFrame(mockedFrame1)
    scoreboard.addFrame(mockedFrame2)
    scoreboard.addFrame(mockedFrame1)
    scoreboard.addFrame(mockedFrame1)
    expect(scoreboard.total()).toBe(74)
    expect(scoreboard.frameCount()).toBe(10)
  })


})

describe("a bonus is added if a spare is bowled", () => {

  it("gives a bonus after the first frame is a spare and the second frame is bowled", () => {
    const scoreboard = new Scoreboard
    const mockedFrame1 = {
      accessFrame: () => {return [2, 8]},
      roll1: () => {return 2},
      roll2: () => {return 8},
      frameTotal: () => {return 10},
      checkForSpare: () => {return true},
      checkForStrike: () => {return false}
    }
    const mockedFrame2 = {
      accessFrame: () => {return [3, 3]},
      roll1: () => {return 3},
      roll2: () => {return 4},
      frameTotal: () => {return 6},
      checkForSpare: () => {return false},
      checkForStrike: () => {return false}
    }
    scoreboard.addFrame(mockedFrame1)
    scoreboard.addFrame(mockedFrame2)
    expect(scoreboard.total()).toBe(19)
    expect(scoreboard.frameCount()).toBe(2)
  })

  it("gives several bonus' if multiple spares bowled", () => {
    const scoreboard = new Scoreboard
    const mockedFrame1 = {
      accessFrame: () => {return [2, 8]},
      roll1: () => {return 2},
      roll2: () => {return 8},
      frameTotal: () => {return 10},
      checkForSpare: () => {return true},
      checkForStrike: () => {return false}
    }
    const mockedFrame2 = {
      accessFrame: () => {return [3, 3]},
      roll1: () => {return 3},
      roll2: () => {return 3},
      frameTotal: () => {return 6},
      checkForSpare: () => {return false},
      checkForStrike: () => {return false}
    }   
    scoreboard.addFrame(mockedFrame1)
    scoreboard.addFrame(mockedFrame2)
    scoreboard.addFrame(mockedFrame2)
    scoreboard.addFrame(mockedFrame2)
    scoreboard.addFrame(mockedFrame1)
    scoreboard.addFrame(mockedFrame2)
    scoreboard.addFrame(mockedFrame2)
    scoreboard.addFrame(mockedFrame1)
    scoreboard.addFrame(mockedFrame2)
    scoreboard.addFrame(mockedFrame2)
    expect(scoreboard.total()).toBe(81)
    expect(scoreboard.frameCount()).toBe(10)
  })
})

describe("a bonus is added if a strike is bowled", () => {
  it("gives a bonus after the first frame is a strike and the second frame is bowled", () => {
    const scoreboard = new Scoreboard
    const mockedFrame1 = {
      accessFrame: () => {return [10, 0]},
      roll1: () => {return 10},
      roll2: () => {return 0},
      frameTotal: () => {return 10},
      checkForSpare: () => {return false},
      checkForStrike: () => {return true}
    }
    const mockedFrame2 = {
      accessFrame: () => {return [3, 3]},
      roll1: () => {return 3},
      roll2: () => {return 3},
      frameTotal: () => {return 6},
      checkForSpare: () => {return false},
      checkForStrike: () => {return false}
    }
    scoreboard.addFrame(mockedFrame1)
    scoreboard.addFrame(mockedFrame2)
    expect(scoreboard.total()).toBe(22)
    expect(scoreboard.frameCount()).toBe(2)
  })

  it("gives several bonus' if multiple strikes bowled", () => {
    const scoreboard = new Scoreboard
    const mockedFrame1 = {
      accessFrame: () => {return [10, 0]},
      roll1: () => {return 10},
      roll2: () => {return 0},
      frameTotal: () => {return 10},
      checkForSpare: () => {return false},
      checkForStrike: () => {return true}
    }
    const mockedFrame2 = {
      accessFrame: () => {return [3, 3]},
      roll1: () => {return 3},
      roll2: () => {return 3},
      frameTotal: () => {return 6},
      checkForSpare: () => {return false},
      checkForStrike: () => {return false}
    }   
    scoreboard.addFrame(mockedFrame1)
    scoreboard.addFrame(mockedFrame2)
    scoreboard.addFrame(mockedFrame2)
    scoreboard.addFrame(mockedFrame2)
    scoreboard.addFrame(mockedFrame1)
    scoreboard.addFrame(mockedFrame2)
    scoreboard.addFrame(mockedFrame2)
    scoreboard.addFrame(mockedFrame1)
    scoreboard.addFrame(mockedFrame2)
    scoreboard.addFrame(mockedFrame2)   
    expect(scoreboard.total()).toBe(90)
    expect(scoreboard.frameCount()).toBe(10)
  })
})

describe("mix of strikes and spares bowled", () => {
  it("gives bonus' and correct final score", () => {
    const scoreboard = new Scoreboard
    const mockedFrame1 = {
      accessFrame: () => {return [10, 0]},
      roll1: () => {return 10},
      roll2: () => {return 0},
      frameTotal: () => {return 10},
      checkForSpare: () => {return false},
      checkForStrike: () => {return true}
    }
    const mockedFrame2 = {
      accessFrame: () => {return [3, 3]},
      roll1: () => {return 3},
      roll2: () => {return 3},
      frameTotal: () => {return 6},
      checkForSpare: () => {return false},
      checkForStrike: () => {return false}
    }
    const mockedFrame3 = {
      accessFrame: () => {return [3, 7]},
      roll1: () => {return 3},
      roll2: () => {return 7},
      frameTotal: () => {return 10},
      checkForSpare: () => {return true},
      checkForStrike: () => {return false}
    }   
    scoreboard.addFrame(mockedFrame1)
    scoreboard.addFrame(mockedFrame2)
    scoreboard.addFrame(mockedFrame2)
    scoreboard.addFrame(mockedFrame3)
    scoreboard.addFrame(mockedFrame1)
    scoreboard.addFrame(mockedFrame3)
    scoreboard.addFrame(mockedFrame2)
    scoreboard.addFrame(mockedFrame2)
    scoreboard.addFrame(mockedFrame1)
    scoreboard.addFrame(mockedFrame2)
    expect(scoreboard.total()).toBe(115)
    expect(scoreboard.frameCount()).toBe(10)
  })
})

describe("final frame has three rolls", () => {
  it("adds a single roll bonus if spare", () => {
    const scoreboard = new Scoreboard
    const mockedFrame1 = {
      accessFrame: () => {return [10, 0]},
      roll1: () => {return 10},
      roll2: () => {return 0},
      frameTotal: () => {return 10},
      checkForSpare: () => {return false},
      checkForStrike: () => {return true}
    }
    const mockedFrame2 = {
      accessFrame: () => {return [3, 3]},
      roll1: () => {return 3},
      roll2: () => {return 3},
      frameTotal: () => {return 6},
      checkForSpare: () => {return false},
      checkForStrike: () => {return false}
    }
    const mockedFrame3 = {
      accessFrame: () => {return [2, 8, 6]},
      roll1: () => {return 2},
      roll2: () => {return 8},
      frameTotal: () => {return 16},
      checkForSpare: () => {return true},
      checkForStrike: () => {return false}
    } 
    scoreboard.addFrame(mockedFrame2)
    scoreboard.addFrame(mockedFrame2)
    scoreboard.addFrame(mockedFrame2)
    scoreboard.addFrame(mockedFrame2)
    scoreboard.addFrame(mockedFrame2)
    scoreboard.addFrame(mockedFrame2)
    scoreboard.addFrame(mockedFrame2)
    scoreboard.addFrame(mockedFrame2)
    scoreboard.addFrame(mockedFrame1)
    scoreboard.addFrame(mockedFrame3)
    expect(scoreboard.total()).toBe(84)
    expect(scoreboard.frameCount()).toBe(10)
  })

  it("adds a double roll bonus if strike", () => {
    const scoreboard = new Scoreboard   
    const mockedFrame1 = {
      accessFrame: () => {return [10, 0]},
      roll1: () => {return 10},
      roll2: () => {return 0},
      frameTotal: () => {return 10},
      checkForSpare: () => {return false},
      checkForStrike: () => {return true}
    }
    const mockedFrame2 = {
      accessFrame: () => {return [3, 3]},
      roll1: () => {return 3},
      roll2: () => {return 3},
      frameTotal: () => {return 6},
      checkForSpare: () => {return false},
      checkForStrike: () => {return false}
    }
    const mockedFrame3 = {
      accessFrame: () => {return [10, 8, 2]},
      roll1: () => {return 10},
      roll2: () => {return 8},
      frameTotal: () => {return 20},
      checkForSpare: () => {return false},
      checkForStrike: () => {return true}
    } 
    scoreboard.addFrame(mockedFrame2)
    scoreboard.addFrame(mockedFrame2)
    scoreboard.addFrame(mockedFrame2)
    scoreboard.addFrame(mockedFrame2)
    scoreboard.addFrame(mockedFrame2)
    scoreboard.addFrame(mockedFrame2)
    scoreboard.addFrame(mockedFrame2)
    scoreboard.addFrame(mockedFrame2)
    scoreboard.addFrame(mockedFrame1)
    scoreboard.addFrame(mockedFrame3)
    expect(scoreboard.total()).toBe(96)
    expect(scoreboard.frameCount()).toBe(10)
  })

  it("adds final frame score of 30 if all strikes", () => {
    const scoreboard = new Scoreboard   
    const mockedFrame1 = {
      accessFrame: () => {return [10, 0]},
      roll1: () => {return 10},
      roll2: () => {return 0},
      frameTotal: () => {return 10},
      checkForSpare: () => {return false},
      checkForStrike: () => {return true}
    }
    const mockedFrame2 = {
      accessFrame: () => {return [3, 3]},
      roll1: () => {return 3},
      roll2: () => {return 3},
      frameTotal: () => {return 6},
      checkForSpare: () => {return false},
      checkForStrike: () => {return false}
    }
    const mockedFrame3 = {
      accessFrame: () => {return [10, 10, 10]},
      roll1: () => {return 10},
      roll2: () => {return 10},
      frameTotal: () => {return 30},
      checkForSpare: () => {return false},
      checkForStrike: () => {return true}
    } 
    scoreboard.addFrame(mockedFrame2)
    scoreboard.addFrame(mockedFrame2)
    scoreboard.addFrame(mockedFrame2)
    scoreboard.addFrame(mockedFrame2)
    scoreboard.addFrame(mockedFrame2)
    scoreboard.addFrame(mockedFrame2)
    scoreboard.addFrame(mockedFrame2)
    scoreboard.addFrame(mockedFrame2)
    scoreboard.addFrame(mockedFrame1)
    scoreboard.addFrame(mockedFrame3)
    expect(scoreboard.calculateLastFrame()).toBe(30)
    expect(scoreboard.total()).toBe(108)
    expect(scoreboard.frameCount()).toBe(10)
  })
})

describe("perfect game is scored", () => {
  it("has a grand total of 300", () => {
    const scoreboard = new Scoreboard
    const mockedFrame1 = {
      accessFrame: () => {return [10, 0]},
      roll1: () => {return 10},
      roll2: () => {return 0},
      frameTotal: () => {return 10},
      checkForSpare: () => {return false},
      checkForStrike: () => {return true}
    }
    const mockedFrame2 = {
      accessFrame: () => {return [10, 10, 10]},
      roll1: () => {return 10},
      roll2: () => {return 10},
      frameTotal: () => {return 30},
      checkForSpare: () => {return false},
      checkForStrike: () => {return true}
    } 
    scoreboard.addFrame(mockedFrame1)
    scoreboard.addFrame(mockedFrame1)
    scoreboard.addFrame(mockedFrame1)
    scoreboard.addFrame(mockedFrame1)
    scoreboard.addFrame(mockedFrame1)
    scoreboard.addFrame(mockedFrame1)
    scoreboard.addFrame(mockedFrame1)
    scoreboard.addFrame(mockedFrame1)
    scoreboard.addFrame(mockedFrame1)
    scoreboard.addFrame(mockedFrame2)
    expect(scoreboard.total()).toBe(300)
    expect(scoreboard.calculateLastFrame()).toBe(30)
    expect(scoreboard.frameCount()).toBe(10)
  })
})

describe("expected errors", () => {
  it("fails if a roll is greater than 10", () => {
    const scoreboard = new Scoreboard
    const mockedFrame1 = {
      accessFrame: () => {return [11, 0]},
      roll1: () => {return 11},
      roll2: () => {return 0},
      frameTotal: () => {return 11},
      checkForSpare: () => {return false},
      checkForStrike: () => {return false}
    }
    expect(() => {scoreboard.addFrame(mockedFrame1)}).toThrow("A roll cannot be greater than 10");
  })

  it("fails if both rolls sum greater than 10", () => {
    const scoreboard = new Scoreboard
    const mockedFrame1 = {
      accessFrame: () => {return [5, 6]},
      roll1: () => {return 5},
      roll2: () => {return 6},
      frameTotal: () => {return 11},
      checkForSpare: () => {return false},
      checkForStrike: () => {return false}
    }
    expect(() => {scoreboard.addFrame(mockedFrame1)}).toThrow("Sum of rolls cannot be greater than 10");
  })

  it("fails if the final frame is a strike first roll then two scores that add to more than 10", () => {
  const scoreboard = new Scoreboard
  const mockedFrame1 = {
    accessFrame: () => {return [10, 0]},
    roll1: () => {return 10},
    roll2: () => {return 0},
    frameTotal: () => {return 10},
    checkForSpare: () => {return false},
    checkForStrike: () => {return true}
  }   
  const mockedFrame2 = {
    accessFrame: () => {return [10, 8, 3]},
    roll1: () => {return 10},
    roll2: () => {return 8},
    frameTotal: () => {return 21},
    checkForSpare: () => {return false},
    checkForStrike: () => {return true}
  }   
  scoreboard.addFrame(mockedFrame1)
  scoreboard.addFrame(mockedFrame1)
  scoreboard.addFrame(mockedFrame1)
  scoreboard.addFrame(mockedFrame1)
  scoreboard.addFrame(mockedFrame1)
  scoreboard.addFrame(mockedFrame1)
  scoreboard.addFrame(mockedFrame1)
  scoreboard.addFrame(mockedFrame1)
  scoreboard.addFrame(mockedFrame1)
  expect(() => {scoreboard.addFrame(mockedFrame2)}).toThrow("Sum of rolls cannot be greater than 10");
  })

  it("fails if the final frame is two scores that add to more than 10", () => {
    const scoreboard = new Scoreboard   
    const mockedFrame1 = {
      accessFrame: () => {return [10, 0]},
      roll1: () => {return 10},
      roll2: () => {return 0},
      frameTotal: () => {return 10},
      checkForSpare: () => {return false},
      checkForStrike: () => {return true}
    }   
    const mockedFrame2 = {
      accessFrame: () => {return [9, 2, 3]},
      roll1: () => {return 9},
      roll2: () => {return 2},
      frameTotal: () => {return 14},
      checkForSpare: () => {return false},
      checkForStrike: () => {return false}
    }   
    scoreboard.addFrame(mockedFrame1)
    scoreboard.addFrame(mockedFrame1)
    scoreboard.addFrame(mockedFrame1)
    scoreboard.addFrame(mockedFrame1)
    scoreboard.addFrame(mockedFrame1)
    scoreboard.addFrame(mockedFrame1)
    scoreboard.addFrame(mockedFrame1)
    scoreboard.addFrame(mockedFrame1)
    scoreboard.addFrame(mockedFrame1)
    expect(() => {scoreboard.addFrame(mockedFrame2)}).toThrow("Sum of rolls cannot be greater than 10");
    })
})