'use strict';

describe ('Bowling',function(){
  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  it ('gives score 0 when 0 pins are hit after 10 frames', function(){
    for (var i = 0; i < 20; i++) {
      bowling.roll(0);
    }
  expect(bowling.score()).toEqual(0);
  });

  it('gives score 20 when 1 pin is hit each frame', function(){
    for(var i = 0; i < 20; i++) {
      bowling.roll(1)
    }
  expect(bowling.score()).toEqual(20);
  })

  it('calculates spares correctly', function(){
    bowling.roll(3)
    bowling.roll(7)
    bowling.roll(1)
    for(var i = 0; i < 17; i++) {
      bowling.roll(0)
    }
    expect(bowling.score()).toEqual(12);

  })

  it('calculates strikes correctly', function(){
    bowling.roll(10)
    bowling.roll(2)
    bowling.roll(2)
    for(var i = 0; i < 16; i++) {
      bowling.roll(0)
    }
    expect(bowling.score()).toEqual(18);

  })

  it('calculates 10th frame bonus score correctly if there are three strikes', function(){
    for(var i = 0; i < 18; i++) {
      bowling.roll(0)
    }
    bowling.roll(10)
    bowling.roll(10)
    bowling.roll(10)

    expect(bowling.score()).toEqual(30);

  })

  it('calculates 10th frame bonus score correctly if there is a spare and strike', function(){
    for(var i = 0; i < 18; i++) {
      bowling.roll(0)
    }
    bowling.roll(1)
    bowling.roll(9)
    bowling.roll(10)

    expect(bowling.score()).toEqual(20);

  })

  it('does not allow bonus round if not a strike or spare', function(){
    for(var i = 0; i < 18; i++) {
      bowling.roll(0)
    }
    bowling.roll(3)
    bowling.roll(3)
    bowling.roll(3)

    expect(bowling.score()).toEqual(6);

  })

  it('does not allow bonus round if not a strike or spare', function(){
    for(var i = 0; i < 19; i++) {
      bowling.roll(0)
    }
    bowling.roll(3)

    expect(bowling.score()).toEqual(3);

  })

  it ('allows player to play perfect game', function(){
    for(var i = 0; i < 19; i++ ) {
      bowling.roll(10)
    }
    bowling.roll(10)
    bowling.roll(10)

  expect(bowling.score()).toEqual(300);
});




});
