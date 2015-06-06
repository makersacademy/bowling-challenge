describe('Frame', function() {
  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  it('a new frame starts with 10 pins', function() {
    expect(frame.pinCount).toEqual(10);
  });

  it('a new frame starts with 0 rolls being taken',function(){
    expect(frame.rollCount).toEqual(0);
  });

  it('can roll and knock down 3 pins', function(){
    frame.knockPins(3);
    expect(frame.pinCount).toEqual(7);
    expect(frame.rollCount).toEqual(1);
  });

  it('can have another roll on same frame and knock down 4 pins', function(){
    frame.knockPins(3);
    frame.knockPins(4);
    expect(frame.pinCount).toEqual(3);
    expect(frame.rollCount).toEqual(2);
  });

  it('knows after 2 rolls that the Frame is over', function(){
    frame.knockPins(3);
    frame.knockPins(4);
    frame.knockPins(1);
    expect(frame.pinCount).toEqual(3);
    expect(frame.isOver).toEqual(true);
  });

  it('can score a strike', function(){
    frame.knockPins(10);
    expect(frame.rollCount).toEqual(1);
    expect(frame.isOver).toEqual(true);
  });

  it('can score a spare', function(){
    frame.knockPins(9);
    frame.knockPins(1);
    expect(frame.pinCount).toEqual(0);
    expect(frame.rollCount).toEqual(2);

  });


});




// Frame ends after 2 bowls/rolls
//frame can strike

//frame can spare
//