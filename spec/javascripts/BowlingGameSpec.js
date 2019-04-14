describe('Bowling', function() {
  it('Gutter game', function() {
    const bowling = new Bowling();

    const times = 20;
    for (let i=0; i < times; i++) {
      bowling.roll(0);
    };

    expect(bowling.result()).toEqual(0);
  });

  it('adds a frame result into array after two rolls', function(){
    const bowling = new Bowling();
    const times = 2;
    for (let i=0; i < times; i++) {
      bowling.roll(0);
    };

    expect(bowling._frames.length).toEqual(1);
  });

  it('adds a frame result into array after four rolls', function(){
    const bowling = new Bowling();
    const times = 4;
    for (let i=0; i < times; i++) {
      bowling.roll(0);
    };

    expect(bowling._frames.length).toEqual(2);
  });

  it('no result stored after 10 frames', function(){
    const bowling = new Bowling();
    const times = 30;
    for (let i=0; i < times; i++) {
      bowling.roll(0);
    };

    expect(bowling._frames.length).toEqual(10);
  });

  it('rolling adds points to the final score', function(){
    const bowling = new Bowling();
    const times = 20;
    for (let i=0; i < times; i++) {
      bowling.roll(1);
    };

    expect(bowling.result()).toEqual(20);
  });

  it('strike multiplies next two rolls by two', function(){
    const bowling = new Bowling();
    bowling.roll(10);
    bowling.roll(5);
    bowling.roll(4);

    expect(bowling.result()).toEqual(28);
  });

  it('spare multiplies next one roll by two', function(){
    const bowling = new Bowling();
    bowling.roll(9);
    bowling.roll(1);
    bowling.roll(5);
    bowling.roll(4);
    expect(bowling.result()).toEqual(24);
  });
});
