describe('BowlingFrame', function(){

  beforeEach(function(){
    frame = new BowlingFrame;
  });

  it('can store a first roll', function(){
    frame.firstRoll(3);
    expect(frame.roll1).toEqual(3);
  });

  it('can store a second roll', function(){
    frame.secondRoll(3);
    expect(frame.roll2).toEqual(3);
  });

  it('knows the number of remaining pins', function(){
    frame.firstRoll(6);
    expect(frame.remainingPins()).toEqual(4);
  })

  it('can produce a total score', function(){
    frame.firstRoll(3);
    frame.secondRoll(4);
    expect(frame.score()).toEqual(7);
  });

  it('can return a spare', function(){
    frame.firstRoll(6);
    frame.secondRoll(4);
    expect(frame.score()).toEqual('spare');
  });

  it('can return a strike', function(){
    frame.firstRoll(10);
    expect(frame.score()).toEqual('strike');
  });

  it('scores an Error if the score adds up to more than 10', function(){
    frame.firstRoll(7);
    frame.secondRoll(5);
    expect(frame.score()).toEqual('incorrect scores');
  });



});