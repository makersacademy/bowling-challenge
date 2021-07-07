'use strict'

describe("A frame of bowling", () => {

  let frame
  let next_frame
  let next_next_frame

  it("calculates a total for two rolls", () => {
    frame = makeFrame([1,3])
    next_frame = makeFrame([0,0])
    expect(frame.total()).toEqual(4)
  })

  it("calculates a total for a spare", () => {
    frame = makeFrame([5,5])
    next_frame = makeFrame([5,2])
    expect(frame.total(next_frame)).toEqual(15)
  })

  it("calculates a total for a strike", () => {
    frame = makeFrame([10])
    next_frame = makeFrame([5,2])
    expect(frame.total(next_frame)).toEqual(17)
  })

  it("calculates a total for two strikes in a row", () => {
    frame = makeFrame([10])
    next_frame = makeFrame([10])
    next_next_frame = makeFrame([5, 2])
    expect(frame.total(next_frame, next_next_frame)).toEqual(25)
  })

  it("calculates three strikes in a row", () => {
    frame = makeFrame([10])
    next_frame = makeFrame([10])
    next_next_frame = makeFrame([10])
    expect(frame.total(next_frame, next_next_frame)).toEqual(30)
  })

  it ("calculates a strike in the final frame", () => {
    frame = makeFrame([10,10,10])
    expect(frame.total()).toEqual(30)
  })

  it ("calculates a strike in the final frame but one", () => {
    frame = makeFrame([10])
    next_frame = makeFrame([10,10,10])
    expect(frame.total(next_frame)).toEqual(30)
  })

  function makeFrame(array) {
    return new Frame(array)
  }
})
