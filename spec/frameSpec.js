'use strict';

describe('Frame', function(){

  var frame;

  beforeEach(function(){
    frame = new Frame;
  });

  it('a roll generates a number between 1 - 10', function(){
    expect(frame.roll()).toBeLessThan(11);
  });


})
