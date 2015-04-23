describe('Bowling score', function(){
  
  beforeEach(function(){
    bowling = new bowlingScore();
  });

  it('can keep record of rolls', function(){
    bowling.roll(3);
    expect(bowling.rolls).toEqual([3]);
  });

  it('can keep record of frames', function(){
    bowling.roll(3);
    bowling.roll(4);
    expect(bowling.frames[0]).toEqual(7);
  });

  it('knows the score', function(){
    bowling.roll(3);
    bowling.roll(4);
    bowling.roll(3);
    bowling.roll(4);
    expect(bowling.score()).toEqual(14);
  });

  it('can roll a spare', function(){
    bowling.roll(3);
    bowling.roll(7);
    bowling.roll(2);
    expect(bowling.frames[0]).toEqual(12);
  });

  it('can roll a strike', function(){
    bowling.roll(10);
    bowling.roll(2);
    bowling.roll(4);
    expect(bowling.frames[0]).toEqual(16);
  });

  it('can roll a perfect game', function(){
    for(x=0;x<12;x++) {
      bowling.roll(10);
    }
    expect(bowling.score()).toEqual(300);
  });

  it('can roll a spare on the last frame', function(){
    for(x=0;x<18;x++) {
      bowling.roll(0);
    }
    bowling.roll(5);
    bowling.roll(5);
    bowling.roll(5);
    expect(bowling.score()).toEqual(15);
  });

  it('cannot roll third time on last frame if no spare or strike', function(){
    for(x=0;x<18;x++) {
      bowling.roll(0);
    }
    bowling.roll(5);
    bowling.roll(2);
    bowling.roll(3);
    expect(bowling.score()).toEqual(7);
  });

  it('cannot roll fourth time on last frame after bonus', function(){
    for(x=0;x<18;x++) {
      bowling.roll(0);
    }
    bowling.roll(10);
    bowling.roll(2);
    bowling.roll(3);
    bowling.roll(3)
    expect(bowling.score()).toEqual(15);
  });
});