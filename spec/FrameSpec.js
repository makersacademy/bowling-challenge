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

  // });

// if KnockPins.count = 0-2

// else
//   it('can go bowl no higher than 10 on first game', function(){
//     expect(function () {frame.knockPins(11)}).toThrow("There are only 10 pins to knock down!");
//   });

});




// Frame ends after 2 bowls/rolls
//frame can strike

//frame can spare
//