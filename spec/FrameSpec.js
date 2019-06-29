"use strict";

describe('Frame', function(){

  let frame;
  let rollDouble;

  beforeEach(function(){
    frame = new Frame();
     rollDouble = jasmine.createSpyObj("roll",["validRoll"]);
    rollDouble.validRoll.and.returnValue(true);
  });

  it('should decrese number of pins remaining by a valid roll', function(){
    frame.roll(3, rollDouble);
    expect(frame.numberPinsRemaining()).toEqual(7);
  });

  it('should return a correct score for 2 rolls', function(){
    frame.roll(3, rollDouble);
    frame.roll(3, rollDouble);
    expect(frame.score()).toEqual(6);
  });

  it('should register a strike in a frame', function(){
    frame.roll(10, rollDouble);
    expect(frame.containsAStrike()).toBe(true);
  });

  it('should register a spare in a frame', function(){
    frame.roll(9, rollDouble);
    frame.roll(1, rollDouble);
    expect(frame.containsAStrike()).toBe(false);
  });

  it('should register a spare in a frame', function(){
    frame.roll(0, rollDouble);
    frame.roll(10, rollDouble);
    expect(frame.containsASpare()).toBe(true);
  });

  it('should register a spare in a frame', function(){
    frame.roll(3, rollDouble);
    frame.roll(7, rollDouble);
    expect(frame.containsASpare()).toBe(true);
  });

  it('should recognise that not all frames are spares', function(){
    frame.roll(3, rollDouble);
    frame.roll(6, rollDouble);
    expect(frame.containsASpare()).toBe(false);
  });

  it('should have score ammended by a bonus', function(){
    frame.roll(10, rollDouble);
    frame.addBonus(7);
    expect(frame.totalScore()).toEqual(17);
  })

  it('should report if frame in play', function(){
    expect(frame.isInPlay()).toBe(true);
    frame.roll(4, rollDouble);
    expect(frame.isInPlay()).toBe(true);
    frame.roll(4, rollDouble);
    expect(frame.isInPlay()).toBe(false);
  });

  it('if frame contains strike not in play', function(){
    expect(frame.isInPlay()).toBe(true);
    frame.roll(10, rollDouble);
    expect(frame.isInPlay()).toBe(false);
  });




});