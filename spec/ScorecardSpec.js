describe('Scorecard', function() {
  var scorecard;
  var frame;

  beforeEach(function() {
    scorecard = new Scorecard();
    frame = new Frame();
  });

  it('scores 0 for a gutter game', function() {
    for (var i = 0; i < 10; i++) {
      scorecard.enter(0,0);
    };
    expect(scorecard.calculate()).toEqual(0)

  });

  it('scores 300 for a perfect game', function() {
    for (var i = 0; i < 12; i++) {
      scorecard.enter(10,0);
    };
    expect(scorecard.calculate()).toEqual(300)
  });

  it('scores 80 when each frame is 5, 3 ', function() {
    for (var i = 0; i < 10; i++) {
      scorecard.enter(5,3);
    };
    expect(scorecard.calculate()).toEqual(80)
  });
});
