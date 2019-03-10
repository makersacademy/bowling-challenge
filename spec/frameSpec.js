describe('Frame', function() {

  var frame;

  // describe("Frame", function {

    it("holds the total of two rolls", function() {
      frame = new Frame([3, 4])
      frame.total(3, 4)
      expect(frame._total).toEqual(7)

    })

    it("if the first roll is a 'strike', the second roll is zero", function() {
      frame = new Frame([10])
      expect(frame._roll2).toEqual(0)
    })

// }) // describe block





}) // last brackets
