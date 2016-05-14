describe("Frame", function() {

  var frame

  beforeEach(function() {
    frame = new Frame()
  })

  it("should log the score of a roll", function() {
    frame.rollOne(5)
    expect(frame.score()).toEqual(5)
  })

  it("should sum the score of the first and second roll", function() {
    frame.rollOne(4)
    frame.rollTwo(3)
    expect(frame.score()).toEqual(7)
  })

})