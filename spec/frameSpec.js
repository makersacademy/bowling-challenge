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

  it('shows the number of pins remaining after the first bowl', function(){
    spyOn(Math, 'random').and.returnValue(0.3);
    frame.firstBowl();
    expect(frame.firstBowlRemainder).toEqual(7);
  });

  it('second bowl knocks down a random number of pins that is remainder from first', function(){
    spyOn(Math, 'random').and.returnValue(0.2);
    frame.firstBowl();
    expect(frame.secondBowl()).toEqual(2);
  });

  it('totals the score for the frame', function(){
    spyOn(frame, 'pinsDown').and.returnValue(3);
    frame.firstBowl();
    frame.secondBowl();
    expect(frame.frameScore()).toEqual(6);
  });

  it('returns strike message if 10 pins are knocked down', function(){
    spyOn(frame, 'pinsDown').and.returnValue(10);
    expect(frame.firstBowl()).toContain('Strike!')
  });

  it('returns gutterball message if 0 pins are knocked down', function(){
    spyOn(frame, 'pinsDown').and.returnValue(0);
    expect(frame.firstBowl()).toContain('Gutterball!')
  });

  it('returns gutterball message if 0 pins are knocked down', function(){
    spyOn(frame, 'pinsDown').and.returnValue(0);
    expect(frame.secondBowl()).toContain('Gutterball!')
  });

  it('returns spare message if 10 pins are knocked down over 2 bowls', function(){
    spyOn(frame, 'totalScore').and.returnValue(10);
    frame.firstBowl();
    expect(frame.secondBowl()).toContain('Spare!')
  });
});
