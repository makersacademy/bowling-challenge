'use strict';

describe('Bowling', function() {

  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  it('shows correct score for perfect game', function() {
    for (var i = 0; i < 12; i++) {
      bowling.enterBallScore(10)
    };
    expect(bowling.calculateTotalScore()).toEqual(300)
    expect(bowling.isGameOver()).toEqual(true)
  })

  it('shows correct score for a game of all spares', function() {
    for (var i = 0; i < 21; i++) {
      bowling.enterBallScore(5)
    };
    expect(bowling.calculateTotalScore()).toEqual(150)
    expect(bowling.isGameOver()).toEqual(true)
  })

  it('shows correct score for a gutter game', function() {
    for (var i = 0; i < 20; i++) {
      bowling.enterBallScore(0)
    };
    expect(bowling.calculateTotalScore()).toEqual(0)
    expect(bowling.isGameOver()).toEqual(true)
  })

  it('resets game half way through', function() {
    for (var i = 0; i < 10; i++) {
      bowling.enterBallScore(5)
    };
    bowling.newGame()
    expect(bowling.calculateTotalScore()).toEqual(0)
    expect(bowling.isGameOver()).toEqual(false)
  })
});
