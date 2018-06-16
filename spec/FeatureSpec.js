'use strict';

// As a player
// So that I can play my first frame
// I'd like to bowl 2 balls and know my score

describe('bowling feature tests',function(){
  var bowling

  beforeEach(function(){
    bowling = new Bowling();
  });

  it('bowling the ball generates the first score', function(){
    spyOn(Math,'floor').and.returnValue(8);
    bowling.bowl()
    expect(bowling.viewScore()).toEqual(8)
  });

  it('a frame has two rolls with a cumulative score', function(){
    spyOn(Math,'floor').and.returnValue(7);
    bowling.bowl()
    bowling.bowl()
    expect(bowling.viewScore()).toEqual(14)
  });

  it('frame scores and overall scores are both tracked', function(){
    spyOn(Math,'floor').and.returnValue(7);
    var i;
    for( i = 0; i < 4; i++){
      bowling.bowl();
    };
    expect(bowling.viewScore()).toEqual(28)
    expect(bowling.viewFrameScore()).toEqual(14)

  });

});
