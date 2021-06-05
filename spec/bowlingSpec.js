'use strict';

describe('Bowling', () => {
  let bowling;

  beforeEach(() => {
    bowling = new Bowling();
  }) 

  it('starts on round 1', () => {
    expect(bowling.getCurrentRound()).toEqual(1);
  })

  it('starts on ball 1', () => {
    expect(bowling.getCurrentBall()).toEqual(1);
  })

  it('increases the round after two balls, no strike', () => {
    bowling.inputPins(1);
    bowling.inputPins(1);
    expect(bowling.getCurrentRound()).toEqual(2);
  })

  it('increases the ball after each throw', () => {
    bowling.inputPins(1);
    expect(bowling.getCurrentBall()).toEqual(2);
  })

  it('adds the pins to the scoreboard', () => {
    bowling.inputPins(5);
    expect(bowling.showScorecard()).toContain([5, null]);
  })

  it('adds a round to the scoreboard', () => {
    bowling.inputPins(1);
    bowling.inputPins(1);
    expect(bowling.showScorecard()).toContain([1, 1]);
  })

  it('creates a new array for each round', () => {
    for (let i = 0; i < 4; i++) {
      bowling.inputPins(1);
    }
    expect(bowling.showScorecard()).toContain([1, 1], [1, 1]);
  })
})