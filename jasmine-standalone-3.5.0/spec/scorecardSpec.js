describe('Scorecard', function () {

  var scorecard;
  var frame;

  beforeEach(function () {
    scorecard = new Scorecard();
    frame = new Frame();
  });

  it('starts with a score of 0', function () {
    expect(scorecard.score).toEqual(0);
  });

  it('starts with a player', function () {
    expect(scorecard.player).toEqual(1);
  });

  //could this be an empty array test>?
  it('starts with an empty array of frames', function () {
    expect(scorecard.frame.length).toEqual(0)
  });
  });
