'use strict';

describe ('scorecard', function() {

  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard()
  });

  it ('has an array of frames when created', function () {
    expect(scorecard.getFrames()).toEqual([new Frame()]);
  });


  it('can get the last frame that was added to the array', function() {
    var frame1 = new Frame()
    frame1.roll1 = 10
    frame1.complete = true

    var frame2 = new Frame()
    frame2.roll1 = 2

    scorecard.frames = [frame1, frame2];
    expect(scorecard.lastFrame()).toEqual(scorecard.getFrames()[1])
  });

  it ('takes a roll result and adds it as the first roll of a new frame if the previous one is complete', function () {
    scorecard.addRoll(5);
    expect(scorecard.getFrames()[0].roll1).toEqual(5);
  });

  it ('takes a roll result and adds it to the second roll if the frame is not complete', function() {
    scorecard.addRoll(5)
    scorecard.addRoll(4)
    expect(scorecard.getFrames()[0].roll2).toEqual(4)
  });

  it ('if the last frame is complete, a new one is created and the roll score is added', function() {
    var frame1 = new Frame()
    frame1.roll1 = 10
    frame1.complete = true
    scorecard.frames = [frame1]
    scorecard.addRoll(5)
    expect(scorecard.frames.length).toEqual(2)
  });


});