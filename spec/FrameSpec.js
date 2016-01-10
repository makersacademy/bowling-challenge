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
    it("it is initialized with a first roll played, and second one empty", function() {
      expect(frame.firstRoll).toEqual(6);
      expect(frame.secondRoll).toEqual(null);
    })
  })

  describe("#play", function() {
    it("creates a second roll and adds it's score to the frame", function() {
      expect(frame.play()).toEqual(6);
    })

    it("the score of the second roll is stored", function() {
      frame.play()
      expect(frame.secondRoll).toEqual(6);
    })
  })

  describe("#isCompleted", function() {
    it("it returns true when both first and second rolls are completed", function() {
      frame.play()
      expect(frame.isCompleted()).toBeTruthy();
    })
    it("it returns false when the second roll hasn't yet happened", function() {
      expect(frame.isCompleted()).toBeFalsy();
    })
    it("it returns pending when there is a spare", function() {
      frame.secondRoll = 4;
      expect(frame.isCompleted()).toEqual('points pending');
    })
    it("returns true when the first roll was a strike", function () {
      frame.firstRoll = 10;
      expect(frame.isCompleted()).toBeTruthy();
    })
  })

  describe("#getFramePoints", function() {
    it("returns the total score of the current frame", function() {
      frame.play()
      expect(frame.getFramePoints()).toEqual(12);
    })
  })

})
