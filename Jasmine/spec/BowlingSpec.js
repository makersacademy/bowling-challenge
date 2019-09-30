describe("Game", function() {

  beforeEach(function () {
  game = new Game()
  })

  it("Has a score of 5 if 5 pins are hit as a first roll", function() {
    game.roll(5)
    expect(game.score()).toEqual(5)
  });

  it("Has a score of 8 if the first two bowls hit 4 pins each", function() {
    game.roll(4)
    game.roll(4)
    expect(game.score()).toEqual(8)
  })

  it("gives a half-strike bonus of 2 if the first two shots are a half strike, and the third hits 2", function() {
    game.roll(4)
    game.roll(6)
    game.roll(2)
    expect(game.score()).toEqual(14)
  })

  it("gives a half strike bonus on the second frame", function() {
    game.roll(3)
    game.roll(4)
    game.roll(5)
    game.roll(5)
    game.roll(3)
    expect(game.score()).toEqual(23)
  })

  it("does not give a halfstrike if the second ball of the first and first ball of the second frame equals ten", function() {
    game.roll(3)
    game.roll(4)
    game.roll(6)
    game.roll(2)
    game.roll(3)
    expect(game.score()).toEqual(18)
  })

  it("gives a strike bonus of the following two rolls", function() {
    game.roll(10)
    game.roll(4)
    game.roll(3)
    expect(game.score()).toEqual(24)
  })

  it("gives a strike bonus and a half strike bonus", function() {
    game.roll(10)
    game.roll(4)
    game.roll(6)
    game.roll(3)
    expect(game.score()).toEqual(36)
  })
})
//   it("Has a frame number of 1 on initialization", function() {
//     expect(game.frameNumber).toEqual(1)
//   })
// })
//
// describe("Frame", function() {
//
//   beforeEach(function () {
//   frame = new Frame()
//   })

//   describe(".frameBowl", function() {
//     it("records the score from a bowl in pinScore", function() {
//       expect(frame.frameBowl(2)).toEqual(2)
//     });
//   });
//
//   describe(".isComplete", function() {
//     it("is false on initialization", function() {
//       expect(frame.frameIsComplete).toEqual(false)
//     })
//
//     it("is true when two bowls in the frame are made", function() {
//       frame.frameBowl(2);
//       frame.frameBowl(3);
//       expect(frame.score()).toEqual(5)
//       expect(frame.frameIsComplete).toEqual(true)
//     })
//     it("is true when a strike is made", function() {
//       frame.frameBowl(10);
//       expect(frame.frameIsComplete).toEqual(true)
//     });
//   });
// });
