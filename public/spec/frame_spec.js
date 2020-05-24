'use strict';

describe('Frame', function() {

  var frame;

  beforeEach(function() {
    frame =  new Frame();
  });

  it('initializing pins number to 10', function() {
    expect(frame.pins).toEqual(10);
    });

  it('initializing first roll to integer', function(){
    expect(frame.firstroll).toMatch(/\d+/);
  });

  it('initializing second roll to integer', function(){
    expect(frame.secondroll).toMatch(/\d+/);
  });

  it('should receive shot',function(){
    frame.receiveShot(1);
    expect(frame.pins).toEqual(9);
  });

  it('shouldnt receive more than 10 knocked down pins', function(){
    frame.receiveShot(3);
    expect(function(){frame.receiveShot(8)}).toThrowError('Not allowed more than ten balls');


  });

  it('should be able to keep track of the score for each shot', function() {
    frame.receiveShot(3);
    frame.receiveShot(7);
    expect(frame.firstroll).toEqual(3);
    expect(frame.secondroll).toEqual(7);
  });

});

