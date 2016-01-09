describe("Frame", function(){
  var frame;

  beforeEach(function() {
    frame = new Frame;
  })

  describe("#init", function() {
    it("it is initialized with the first and second roll empty", function() {
      expect(frame.firstRoll).toEqual(null);
      expect(frame.secondRoll).toEqual(null);
    })
  })

})
