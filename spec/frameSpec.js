describe('Frame', function() {

  var frame;
  var next;

  // describe("Frame", function {

    it("holds the total of two rolls", function() {
      frame = new Frame([3, 4])
      frame.rollScore(3, 4)
      expect(frame._rollScore).toEqual(7)

    })

    it("calculates the total for two rounds", function() {
      frame = new Frame([3, 4])
      next = new Frame([0,0])
      expect(frame._total).toEqual(7)

    })

    it("if the first roll is a 'strike', the second roll is zero", function() {
      frame = new Frame([10])
      expect(frame._roll2).toEqual(0)
    })


    // it("it calculates the total for a spare", function() {
    //   frame = new Frame([5, 5])
    //   next = new Frame([5, 2])
    //   expect(frame.total(next).toEqual(15))
    //
    // })

// }) // describe block





}) // last brackets
