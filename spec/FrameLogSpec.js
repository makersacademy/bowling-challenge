describe("FrameLog", function() {

  var frameLog;

  beforeEach(function() {
    frameLog = new FrameLog();
  });

  describe("frame handler", function() {
    beforeEach(function() {
      frame = jasmine.createSpyObj('Frame', ['isComplete', 'record']);
      frame.isComplete.and.returnValue(false);
      frameLog = new FrameLog(frame);
    });

    it("creates a new frame if none exists", function() {
      expect(frameLog.frames().length).toEqual(0);
      frameLog.record(1);
      expect(frameLog.frames().length).toEqual(1);
    });

    it("calls the frame record method", function() {
      frameLog.record(1);
      expect(frame.record).toHaveBeenCalledWith(1);
    });

    it("starts a new frame after completing one", function() {
      frameLog.record(1);
      frame.isComplete.and.returnValue(true);
      frameLog.record(1);
      expect(frameLog.frames().length).toEqual(2);
    });
  });

  describe("calculate a simple score", function() {
    beforeEach(function() {
      frameLog = new FrameLog();

      frame1 = jasmine.createSpyObj('Frame', ['total'])
      frame1.total.and.returnValue([1,2]);

      frameLog.log = [frame1];
      // Query what is correct/better method - stubbing variable or method
      // spyOn(frameLog, 'frames').and.returnValue([frame1]);
    });

    it("returns the calculated score", function() {
      expect(frameLog.score()).toEqual(3);
    });
  });

  describe("calculate a score with a strike", function() {
    beforeEach(function() {
      frameLog = new FrameLog();

      frame1 = jasmine.createSpyObj('Frame', ['total'])
      frame1.total.and.returnValue([10,0]);

      frame2 = jasmine.createSpyObj('Frame', ['total'])
      frame2.total.and.returnValue([3,6]);

      frameLog.log = [frame1, frame2];
    });

    it("returns the calculated score", function() {
      expect(frameLog.score()).toEqual(28);
    });
  });
});
