describe("Frame", function() {

var scoreCardSpy = jasmine.createSpyObj('scoreCardSpy', [''])
var frameScoreSpy = jasmine.createSpyObj('frameScoreSpy', ['frame'])
var runningScoreSpy = jasmine.createSpyObj('runningScoreSpy', ['spareOrStrike'], ['updateRuningScore'])

  describe("#newFrame:", function () {
    var frame = new Frame();
    it("running score is 0", function() {
      expect(frame.currentRunningScore).toEqual(0);
    });
    it("current frame number is 1", function() {
      expect(frame.currentFrame).toEqual(1);
    });
  });

  describe("No strikes or spares:", function () {
    var frame = new Frame();
    it("on the first frame it returns the frame score 8 and updates the running score to 8", function(){
      frame.information(3,5)
      expect(frame.currentScore).toEqual(8);
      expect(frame.currentRunningScore).toEqual(8);
    });
    it("at the start of the second frame the current frame is 2", function() {
      expect(frame.currentFrame).toEqual(2);
    });
    it("on the second frame it returns the frame score 5 and updates the running score to 13", function() {
      frame.information(4,1)
      expect(frame.currentScore).toEqual(5);
      expect(frame.currentRunningScore).toEqual(13);
    });
  });

  describe("Spare:", function() {
    var frame = new Frame();
    it("on the first frame the frame score is 'spare' and the running score is not updated ", function() {
      frame.information(5,5)
      expect(frame.currentScore).toEqual('Spare');
      expect(frame.currentRunningScore).toEqual(0);
    });
    it("on the second frame the frame score is 6 and the running score is 18", function() {
      frame.information(2,4)
      expect(frame.currentScore).toEqual(6);
      expect(frame.currentRunningScore).toEqual(18);
    });
  });

  describe("Strike:", function() {
    var frame = new Frame();
    it("on the first frame the frame score is 'strike' and the running score is not updated ", function() {
      frame.information(10,0)
      expect(frame.currentScore).toEqual('Strike');
      expect(frame.currentRunningScore).toEqual(0);
    });
    it("on the second frame the frame score is 6 and the running score is 18", function() {
      frame.information(2,4)
      expect(frame.currentScore).toEqual(6);
      expect(frame.currentRunningScore).toEqual(22);
    });
  });

  describe("Multiple stikes:", function() {
  });

})
