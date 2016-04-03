describe("FrameLog", function() {

  var frameLog;

  beforeEach(function() {
    frameLog = new FrameLog();
  });

  describe("single frame", function() {
    it("starts a new frame on first bowl", function() {
      frameLog.record(1);
      expect(frameLog.frames().length).toEqual(1);
    });

    it("adds second bowl result to same frame", function() {
      frameLog.record(1);
      frameLog.record(1);
      expect(frameLog.frames()[0].total()).toEqual([1,1]);
    });

    xdescribe("closing off a frame", function() {
      it("happens after a second bowl", function() {

      });

      it("happens after a strike on first bowl", function() {

      });
    });
  });
});
