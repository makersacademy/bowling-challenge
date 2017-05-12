describe('FrameLog', function() {
  var frameLog;
  var frame;
  var scorecard;

  beforeEach(function() {
    scorecard = jasmine.createSpyObj('scorecard', ['evaluate'])
    frame = jasmine.createSpyObj('frame', ['saveScore', 'scores', 'isComplete'])
    frameLog = new FrameLog(scorecard, frame);
  });

  it('initializes with an empty array of frames', function() {
    expect(frameLog.frames).toEqual([]);
  });
  it('initializes with a frame', function() {
    expect(frameLog.getCurrentFrame()).toEqual(frame);
  });
  it('initializes with a scorecard', function() {
    expect(frameLog.scorecard).toEqual(scorecard);
  });

  describe('getCurrentFrame', function() {
    it('returns the current frame', function() {
      expect(frameLog.getCurrentFrame()).toEqual(frame);
    });
  });

  describe('addFrame', function() {
    it('adds the completed frame to frameLog', function(){
      frameLog._addFrame(frame);
      expect(frameLog.frames).toEqual([frame]);
    });
  });

  describe('addScore', function() {
    beforeEach(function() {
      spyOn(frameLog, '_resetFrame')
      frameLog.addScore(5);
    });
    it('saves the scores to current frame', function(){
      expect(frame.saveScore).toHaveBeenCalledWith(5);
      expect(frameLog._resetFrame).not.toHaveBeenCalled();
    });
    it('saves the score to a new frame after two rounds', function(){
      frame.isComplete.and.returnValue(true);
      frameLog.addScore(3);
      expect(frame.saveScore.calls.count()).toEqual(2);
      expect(frameLog._resetFrame).toHaveBeenCalled();
    });
  });

  describe('resetFrame', function() {
    it('saves the old frame', function() {
      frameLog._resetFrame();
      expect(frameLog.frames.length).toEqual(1);
    });
    it('saves the frame', function() {
      frameLog._resetFrame();
      expect(frameLog.currentFrame.scores).toEqual([]);
    });
    it('sends the frame to scorecard for score evaluation', function(){
      frameLog._resetFrame();
      expect(scorecard.evaluate).toHaveBeenCalled();
    });
  });
});
