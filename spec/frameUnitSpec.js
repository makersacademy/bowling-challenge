describe("Frame", function () {
  var frame ;
  beforeEach(function () {
    frame = new Frame();
  });

  it('should have a score of 0 for frame 1.1', function () {
    expect(frame.frameScoreOne).toEqual(0);
  });

  it('should have a score of 0 for frame 2.2', function () {
    expect(frame.frameScoreTwo).toEqual(0);
  });

  it('should have a new score of 2 when passed 2 for frame 1.1', function () {
    expect(frame.updateFrameScoreOne(2)).toEqual(2);
  });

  it('should have a new score of 2 when passed 2 for frame 1.2', function () {
    expect(frame.updateFrameScoreTwo(2)).toEqual(2);
  });

  it('should return a total for frame 1.1 and frame 1.2', function () {
    frame.updateFrameScoreOne(3);
    frame.updateFrameScoreTwo(4);
    expect(frame.totalUpFrameScore()).toEqual(7);
  });

  it('should be a strike if the score is 10 on the first bowl', function () {
    frame.updateFrameScoreOne(10);
    expect(frame.strikeOrSpare).toEqual("Strike!")
  });

  it('should be a spare if the score totals 10 by the second bowl', function () {
    frame.updateFrameScoreOne(4);
    frame.updateFrameScoreTwo(6);
    expect(frame.strikeOrSpare).toEqual("Spare!")
  });
});
