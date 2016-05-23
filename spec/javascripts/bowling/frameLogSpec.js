describe('Frame Log', function() {
  var frameLog, frame;

  beforeEach(function() {
    frameLog = new FrameLog();
    frame = jasmine.createSpy('frame');
  });

  it('starts with no frames', function() {
    expect(frameLog.count()).toEqual(0);
  });

  it('can add a frame', function() {
    frameLog.add(frame);
    expect(frameLog.count()).toEqual(1);
  });

  it('can return the last frame', function() {
    frameLog.add(frame);
    expect(frameLog.last()).toEqual(frame);
  });

});
