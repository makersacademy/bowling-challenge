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

  describe("calculate score", function() {
    beforeEach(function() {
      frameLog = new FrameLog();
      frame1 = jasmine.createSpyObj('Frame', ['total'])
      frame1.total.and.returnValue([1,2]);
      frameLog.log = [frame1];
      spyOn(frameLog, 'frames').and.returnValue([frame1]);
    });

    it("returns a score", function() {
      expect(frameLog.frames()[0].total()).toEqual(1);
    });
  });

});
