'use strict';

describe('Bowling', function() {
  var bowling;
  beforeEach(function() {
    bowling = new Bowling();
  });

  it('starts from zero points', function() {
    expect(bowling.calculateScore()).toEqual(0);
  });

  it ('example single frame', function() {
    bowling.bowl(5);
    bowling.bowl(3);
    expect(bowling.calculateScore()).toEqual(8);
  });

  it('example ongoing game with multi frames', function() {
    bowling.bowl(10);
    bowling.bowl(5);
    bowling.bowl(4);
    bowling.bowl(2);
    bowling.bowl(8);  
    bowling.bowl(10);
    expect(bowling.calculateScore()).toEqual(58);
  });

  it('scores 0 for gutter game', function() {
    for (var i = 0; i < 20; i++) {
      bowling.bowl(0);
    }
    expect(bowling.calculateScore()).toEqual(0);
  });

  it('scores 300 for perfect game', function() {
    for (var i = 0; i < 12; i++) {
      bowling.bowl(10);
    }
    expect(bowling.calculateScore()).toEqual(300);
  });
});
