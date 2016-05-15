xdescribe("Frame", function() {

  var frame

  beforeEach(function() {
    frame = new Frame()
  })

  describe('roll count', function() {
    it('equals 1 after one roll', function() {
      frame.rollOne(5)
      expect(frame.rollNumber()).toEqual(1)
    })

    it("equals 2 after two rolls", function() {
      frame.rollOne(5)
      frame.rollTwo(1)
      expect(frame.rollNumber()).toEqual(2)
    })
  })

  it("should sum the score of the first and second roll", function() {
    frame.rollOne(4)
    frame.rollTwo(3)
    expect(frame.score()).toEqual(7)
  })

  it('player gets a spare if score of 10 after 2 rolls', function() {
    frame.rollOne(5)
    frame.rollTwo(5)
    expect(frame.score()).toEqual('/')
  })

  it('player gets a strike if score of 10 on first roll', function() {
    frame.rollOne(10)
    expect(frame.score()).toEqual('X')
  })

})