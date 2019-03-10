describe('Frame', function() {

  var frame;
  // var next;

  // describe("Frame", function {

    it("holds the total of two rolls", function() {
      frame = new Frame([3, 4])
      frame.rollScore(3, 4)
      expect(frame._total).toEqual(7)

    })

    it("if the first roll is a 'strike', the second roll is zero", function() {
      frame = new Frame([10])
      expect(frame._roll2).toEqual(0)
    })

    // it("if the total for the rolls is 10, the frame is a 'spare'", function() {
    //   frame = new Frame([7, 3])
    //   frame.total(7, 3)
    //   expect(frame.)
    //
    // })

// }) // describe block





}) // last brackets
