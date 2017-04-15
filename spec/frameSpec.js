'use strict';

describe('Frame', function(){
  var frame;
  beforeEach(function(){
    frame = new Frame();
  });

  it('expects to start frame with 10 pins', function(){
    expect(frame.pins).toEqual(10);
  });

  it('first bowl knocks down a random number of pins', function(){
    spyOn(Math, 'random').and.returnValue(0.3);
    expect(frame.firstBowl()).toEqual(3);
  });

  it('second bowl knocks down a random number of pins that is remainer from first', function(){
    spyOn(Math. 'random')
  });



});
