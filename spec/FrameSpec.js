describe("Frame", function() {
  var frame

  beforeEach(function() {
    frame = new Frame();
  });

  describe("pins", function() {
    it('Should start at 10', function() {
      expect(frame.pins).toEqual(10);
    });
  })

  describe("rollsLeft", function() {
    it('Should start at 2', function() {
      expect(frame.rollsLeft).toEqual(2);
    });
  });

  // describe("rollScore", function() {
  //   it("Should generate a number between 0 and 10", function() {
  //     expect(frame.rollScore() >= 0 && frame.rollScore() <= 10).toBeTruthy;
  //   });
  // });

});
