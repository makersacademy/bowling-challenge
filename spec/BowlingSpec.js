'use strict';

describe('bowling',function(){
  var bowling

  beforeEach(function(){
    bowling = new Bowling();
  });

  it('starts the game by bowling the ball', function(){
    spyOn(Math,'floor').and.returnValue(6);
    bowling.bowl()
    expect(bowling.score).toEqual(6)
  });

  it('a frame score is produced after 2 bowls', function(){
    spyOn(Math,'floor').and.returnValue(5);
    bowling.bowl()
    bowling.bowl()
    expect(bowling.frameScore).toEqual(10)
  });

});
