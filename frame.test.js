const Frame = require('./frame')


describe('first frame', () => {
  test('shows the first role in the first frame', () => {
    let frame = new Frame
    frame.addToFrame(3)
    expect(frame.total()).toEqual(3)
  })
})

describe('first frame spare',() => {
  test('shows spare', () => {
    let frame = new Frame
    frame.addToFrame(7)
    frame.addToFrame(3)
    expect(frame.spare()).toEqual(10)
  })
})

it("shows not spare", () => {
  let frame = new Frame
  frame.addToFrame(2)
  frame.addToFrame(1)
  expect(frame.total()).toEqual(3)
})

it("show strike", () => {
  let frame = new Frame
  frame.addToFrame(10)
  expect(frame.skrike()).toEqual(true)
})

it("show is not a strike", () => {
  let frame = new Frame
  frame.addToFrame(3)
  expect(frame.skrike()).toEqual(false)
})