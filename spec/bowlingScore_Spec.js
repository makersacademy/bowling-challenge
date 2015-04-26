describe('Bowling score', function(){

  var bowling;
  
  beforeEach(function(){
    bowling = new bowlingScore();
  });

  it('can keep record of rolls', function(){
    bowling.roll(3);
    expect(bowling.rolls).toEqual([3]);
  });

  it('can keep record of frames', function(){
    rollTimes(2, 3)
    expect(bowling.frames[0]).toEqual(6);
  });

  it('knows the score for each frame', function(){
    rollTimes(4, 3)
    expect(bowling.score(1)).toEqual(12);
  });

  it('can roll a spare', function(){
    rollTimes(3, 5)
    expect(bowling.frames[0]).toEqual(15);
  });

  it('can roll a strike', function(){
    bowling.roll(10);
    rollTimes(2, 4)
    expect(bowling.frames[0]).toEqual(18);
  });

  it('can roll a perfect game', function(){
    rollTimes(12, 10)
    expect(bowling.score(10)).toEqual(300);
  });

  it('can roll a spare on the last frame', function(){
    rollTimes(18, 0)
    rollTimes(3, 5)
    expect(bowling.score(10)).toEqual(15);
  });

  it('cannot hit more than 10 pins each frame', function(){
    bowling.roll(5);
    expect(function() { bowling.roll(8); }).toThrow(new Error('Roll not allowed'))
  })

  it('cannot roll third time on last frame if no spare or strike', function(){
    rollTimes(18, 0)
    rollTimes(3, 3)
    expect(bowling.score(10)).toEqual(6);
  });

  it('cannot roll fourth time on last frame after bonus', function(){
    rollTimes(18, 0)
    bowling.roll(10);
    rollTimes(3, 2)
    expect(bowling.score(10)).toEqual(14);
  });

  function rollTimes(times, rolls){
    for(x=0;x<times;x++) {
      bowling.roll(rolls);
    }
  }
});