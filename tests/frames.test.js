const Frames = require('../lib/frames')

let frames;
beforeEach(() => {
  frames = new Frames();
})

 describe("Frames", () => {
   it("can create an instance of Frames", () => {
     expect(frames).toBeInstanceOf(Frames)
   })

   it("should start with and empty frames", () => {
      expect(frames.frames).toEqual([])
   })
   it("can add pins to frame", () => {
    frames.addPins(3)
    frames.addPins(4)
    expect(frames.frames).toEqual([[3, 4]])
  })

  it("add frame to frames when has roll 2 balls and the result is less that 10", () => {
    frames.addPins(3)
    frames.addPins(4)
    frames.addPins(3)
    frames.addPins(4)
    expect(frames.frames).toEqual([[3, 4],[3, 4]])
  })

  it("When strike adds the frame to the frames", () => {
    frames.addPins(10)
    frames.addPins(10)
    frames.addPins(3)
    frames.addPins(4)
    expect(frames.frames).toEqual([[10], [10], [3, 4]])
  })

  // it("when spare in frame 10 gives an extra roll to the frame", () => {
  //   for(i = 0; i < 18; i ++) {
  //     frames.addPins(1)
  //   }
  //   frames.addPins(5)
  //   frames.addPins(5)
  //   frames.addPins(3)
  //   expect(frames.frames[9]).toEqual([[5, 5, 3]])
  // })
 })