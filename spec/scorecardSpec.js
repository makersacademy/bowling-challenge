describe('FinalFrame', function() {
  var scorecard;
  function fakeFrame() {
    jasmine.createSpyObj('fakeFrame', ['rolls']);
  };
  function fakeFinalFrame() {
    jasmine.createSpyObj('fakeFinalFrame', ['rolls']);
  };

  beforeEach(function() {
    scorecard = new Scorecard(fakeFrame, fakeFinalFrame);
  });

  it('has an array of frames', function() {
    expect(scorecard.frames instanceof Array).toEqual(true)
  });

  it('has frame instances for the first 9 entries', function() {
    output = true;
    for (var i = 0; i < 9; i++) {
      output = output && (scorecard.frames[i] instanceof fakeFrame)
    }
    expect(output).toEqual(true)
  });

  it('has a finalFrame instance for the last entry', function() {
    expect(scorecard.frames[9] instanceof fakeFinalFrame).toEqual(true)
  });

  it('has a current frame which starts at zero', function() {
    expect(scorecard.currentFrame).toEqual(0)
  });

  it('takes a number rolled and puts it into a frame', function() {
    scorecard.roll(3)
    expect(scorecard.frames[0].roll).toHaveBeenCalledWith(3)
  })
});
