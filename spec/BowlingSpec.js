'use strict';

describe('bowling',function(){
  var bowling

  it('starts the game by bowling the ball', function(){
    bowling = new Bowling();
    spyOn(Math,'floor').and.returnValue(6);
    bowling.bowl()
    expect(bowling.score).toEqual(6)
  });

});
