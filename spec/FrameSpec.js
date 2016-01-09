describe("Frame", function(){
  var frame;
  var ball;

  beforeEach(function() {
    ball = { roll: function() {
      return 6
    }}
    frame = new Frame(ball);
  })

  describe("#init", function() {
    it("it is initialized with the first and second roll empty", function() {
      expect(frame.firstRoll).toEqual(null);
      expect(frame.secondRoll).toEqual(null);
    })
  })

  describe("#roll", function() {
    it("creates a new roll and adds it's score to the frame", function() {
      expect(frame.roll()).toEqual("6 pins hit!");
    })

    it("the score of the first roll is stored", function() {
      frame.roll()
      expect(frame.firstRoll).toEqual(6);
    })

    it("the score of the second roll is stored", function() {
      frame.roll()
      frame.roll()
      expect(frame.secondRoll).toEqual(6);
    })
  })

})
