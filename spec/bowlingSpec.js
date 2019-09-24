'use strict';

describe('Bowling', function() {
  var bowling;
  beforeEach(function() {
    bowling = new Bowling();
  });

  it('starts from zero points', function() {
    expect(bowling.calculateScore()).toEqual(0);
  });

  it('should move to next frame after a strike', function() {
    expect(bowling.frame).toEqual(1);
    expect(bowling.roll).toEqual(1);

    bowling.bowl(10);
    expect(bowling.frame).toEqual(2);
    expect(bowling.roll).toEqual(1);
  })

  it('should throw error for invalid first roll input', function() {
    expect(function() { bowling.bowl(11) }).toThrow('Invalid input. Number greater than pins in lane.');
  })

  it('should throw error for invalid second roll input', function() {
    bowling.bowl(5);
    expect(function() { bowling.bowl(7) }).toThrow('Invalid input. Number greater than pins in lane.');
  })

  it('should throw error after game end', function() {
    for (var i = 0; i < 20; i++) {
      bowling.bowl(4);
    }
    console.log(bowling.frame);
    console.log(bowling.frame);
    console.log(bowling.pinsInLane);
    expect(function() { bowling.bowl(7) }).toThrow('Game over!');
  })

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

  it('example complete game', function() {
    bowling.bowl(1);
    bowling.bowl(4);
    bowling.bowl(4);
    bowling.bowl(5);
    bowling.bowl(6);
    bowling.bowl(4);
    bowling.bowl(5);
    bowling.bowl(5);
    bowling.bowl(10);
    bowling.bowl(0);
    bowling.bowl(1);
    bowling.bowl(7);
    bowling.bowl(3);
    bowling.bowl(6);
    bowling.bowl(4);
    bowling.bowl(10);
    bowling.bowl(2);
    bowling.bowl(8);
    bowling.bowl(6);

    expect(bowling.calculateScore()).toEqual(133);
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

  it('strike in final frame roll 1', function() {
    for (var i = 0; i < 9; i++) {
      bowling.bowl(10);
    }

    // Frame 10
    bowling.bowl(10);
    bowling.bowl(2);
    bowling.bowl(2);

    expect(bowling.calculateScore()).toEqual(276);
  });

  it('miss in final frame roll 1', function() {
    for (var i = 0; i < 9; i++) {
      bowling.bowl(10);
    }

    // Frame 10
    bowling.bowl(0);
    bowling.bowl(2);

    expect(bowling.calculateScore()).toEqual(244);
  });
});
