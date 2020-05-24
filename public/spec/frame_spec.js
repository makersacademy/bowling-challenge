'use strict';

describe('Frame', function() {

  var frame;

  beforeEach(function() {
    frame =  new Frame();
  });

  it('initializing pins number to 10', function() {
    expect(frame.pins).toEqual(10);
    });

  it('initializing pins number to 10', function() {
    expect(frame.score).toMatch(/\d+/);
    });

  it('initializing first roll to integer', function(){
    expect(frame.firstroll).toMatch(/\d+/);
  });

  it('initializing second roll to integer', function(){
    expect(frame.secondroll).toMatch(/\d+/);
  });

  it('initializing rollcount to integer', function(){
    expect(frame.rollcount).toMatch(/\d+/);
  });

  it('should receive shot',function(){
    frame.receiveShot(1);
    expect(frame.pins).toEqual(9);
  });

  it('should be able to keep track of the score for each shot', function() {
    frame.receiveShot(3);
    frame.receiveShot(7);
    expect(frame.firstroll).toEqual(3);
    expect(frame.secondroll).toEqual(7);
  });

  it('shouldnt receive more than 10 knocked down pins', function(){
    frame.receiveShot(3);
    expect(function(){frame.receiveShot(8)}).toThrowError('Not allowed more than ten balls');
  });

  it('every receivinshot roll count incremented by 1',function(){
    frame.receiveShot(1);
    expect(frame.rollcount).toEqual(1);
  });

  it('shouldnt receive only two rolls', function(){
    frame.receiveShot(3);
    frame.receiveShot(3);
    expect(function(){frame.receiveShot(2)}).toThrowError('Only two rolls');
  });

  it ('should return true if it is a strike', function() {
    frame.receiveShot(10);
    expect(frame.isStrike()).toBe(true);
  });

  it ('should return true if it is a spare', function() {
    frame.receiveShot(2);
    frame.receiveShot(8);
    expect(frame.isSpare()).toBe(true);
  });

  it ('should return false if it is not a spare', function() {
    frame.receiveShot(10);
    expect(frame.isSpare()).toBe(false);
  });



});

