'use strict';

describe('bowling',function(){
  var bowling

  it('starts the game by bowling the ball', function(){
    bowling = new Bowling();
    bowling.play()
    expect(bowling.score).toEqual(10)
  });

});
