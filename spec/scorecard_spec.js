describe ('Scorecard', function() {

  var scorecard = new Scorecard();

  it ('initializes with an empty frames array', function() {
    expect(scorecard.getFrames).toEqual ([])
  });

});
