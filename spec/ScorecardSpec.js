describe('Scorecard', function(){
  var scorecard;
  var frame;


  beforeEach(function() {
    scorecard = new Scorecard;
    frame = new Frame;
  });

  it('can register a strike', function(){
    frame.bowl(10);
    expect(frame.strike).toEqual(true);
  });

  it('can register a gutter ball', function(){
    frame.bowl(0);
    expect(frame.go1).toEqual(0);
  });

   it('can register 5 pins down', function(){
    frame.bowl(5);
    expect(frame.go1).toEqual(5);
  });

  it('can register 2 bowls', function(){
    frame.bowl(5);
    frame.bowl(3);
    expect(frame.go1).toEqual(5);
    expect(frame.go2).toEqual(3);
  });

  it('1st bowl cannot exceed 10 pins ', function(){

    expect(function(){ frame.bowl(25);}).toThrow('Cannot exceed 10 pins');
  });

  it('2 bowls cannot exceed a total of 10 pins', function(){
    frame.bowl(5);
    expect(function(){ frame.bowl(7);}).toThrow('Cannot exceed 10 pins');
  });

   it('cannot throw after a strike', function(){
    frame.bowl(10);
    expect(function(){ frame.bowl(1);}).toThrow('Cannot exceed 10 pins');
  });
  // it('can show the total for a game with no spares or strikes', function() {
  //   bowler(bowlFrame,3);
  //   expect(scorecard.total).toEqual(21);
  // });

  // it('can show the total for a frame with a strike', function() {
  //   bowler(bowlStrike,1);
  //   expect(scorecard.total).toEqual(10);
  // });

  // it('can show the total for a frame with 2 strikes', function() {
  //   bowler(bowlStrike,2);
  //   expect(scorecard.total).toEqual(30);
  // });


  // it('cannot bowl twice after a strike', function(){
  //   frame.bowl1(10);
  //   expect(function(){frame.bowl2(1);}).toThrow('Strike, wait for next frame!');
  // });

  function bowlFrame() {
    frame = new Frame;
    frame.bowl(4);
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