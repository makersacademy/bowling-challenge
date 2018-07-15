describe ('Frame', function() {

  var frame = new Frame();

  it ('records the outcome of the first roll', function() {
    frame.recordRoll(2);
    expect(frame.first).toEqual (2);
  });

  it ('records the outcome of the second roll', function() {
    frame.recordRoll(2);
    frame.recordRoll('/');
    expect(frame.second).toEqual ('/');
  });

  it ('keeps a total in-frame and bonus scores', function() {
    frame.addScore(3);
    frame.addScore(5);
    expect(frame.scores).toEqual (8);
  });

});
