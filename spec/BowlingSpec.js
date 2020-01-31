'use strict';

describe ('Bowling',function(){
  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  it ('gives score 0 when 0 pins are hit after 10 frames', function(){
    for ( i=0; i <= 20; i++ ){
      bowling.roll(0);
    }
  expect(bowling.score()).toEqual(0);
  });
});
