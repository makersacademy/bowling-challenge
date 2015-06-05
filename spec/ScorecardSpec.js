describe('Scorecard', function(){
  var scorecard;
  var frame;


  beforeEach(function() {
    scorecard = new Scorecard;
    frame = new Frame;
  });

  it('can show the total for a game with no spares or strikes', function() {
    bowler(bowlFrame,3);
    expect(scorecard.total).toEqual(21);
  });

  it('can show the total for a game with only strikes', function() {
    bowler(bowlStrike,5);
    expect(scorecard.total).toEqual(50);
  });

  it('cannot bowl twice after a strike', function(){
    frame.bowl1(10);
    expect(function(){frame.bowl2(1);}).toThrow('Strike, wait for next frame!');
  });

  function bowlFrame() {
    frame = new Frame;
    frame.bowl1(4);
    frame.bowl2(3);
    scorecard.addFrame(frame);
  }

  function bowlStrike() {
    frame = new Frame;
    frame.bowl1(10);
    scorecard.addFrame(frame);
  }
  function bowler(func, times) {
    for (var i = 0; i < times; i++) {
      func();
    };
  };
});