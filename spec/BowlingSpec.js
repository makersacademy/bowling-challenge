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

});
