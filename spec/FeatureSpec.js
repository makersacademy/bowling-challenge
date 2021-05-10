'use strict';

describe('Feature test', () => {
  let scoreRecorder
  let scoreCalculator

  beforeEach (() => {
    scoreRecorder = new ScoreRecorder();
    scoreCalculator = new ScoreCalculator();
  });

  it('can correctly input rolls and return frame, roll and score for a sample game', () => {
    let frames = []
    // Frame 1
    expect(scoreRecorder.nextInputFrame()).toEqual(1);
    expect(scoreRecorder.nextInputRoll()).toEqual(1);
    frames = scoreRecorder.addRoll(1);
    expect(scoreRecorder.nextInputFrame()).toEqual(1);
    expect(scoreRecorder.nextInputRoll()).toEqual(2);
    frames = scoreRecorder.addRoll(4);
    expect(scoreCalculator.gameScore(frames)).toEqual(5);
    // Frame 2
    expect(scoreRecorder.nextInputFrame()).toEqual(2);
    expect(scoreRecorder.nextInputRoll()).toEqual(1);
    frames = scoreRecorder.addRoll(4);
    expect(scoreRecorder.nextInputFrame()).toEqual(2);
    expect(scoreRecorder.nextInputRoll()).toEqual(2);
    frames = scoreRecorder.addRoll(5);
    expect(scoreCalculator.gameScore(frames)).toEqual(14);
    // Frame 3
    expect(scoreRecorder.nextInputFrame()).toEqual(3);
    expect(scoreRecorder.nextInputRoll()).toEqual(1);
    frames = scoreRecorder.addRoll(6);
    expect(scoreRecorder.nextInputFrame()).toEqual(3);
    expect(scoreRecorder.nextInputRoll()).toEqual(2);
    frames = scoreRecorder.addRoll(4);
    expect(scoreCalculator.gameScore(frames)).toEqual(29 - 5);
    // Frame 4
    expect(scoreRecorder.nextInputFrame()).toEqual(4);
    expect(scoreRecorder.nextInputRoll()).toEqual(1);
    frames = scoreRecorder.addRoll(5);
    expect(scoreRecorder.nextInputFrame()).toEqual(4);
    expect(scoreRecorder.nextInputRoll()).toEqual(2);
    frames = scoreRecorder.addRoll(5);
    expect(scoreCalculator.gameScore(frames)).toEqual(49 - 10);
    // Frame 5
    expect(scoreRecorder.nextInputFrame()).toEqual(5);
    expect(scoreRecorder.nextInputRoll()).toEqual(1);
    frames = scoreRecorder.addRoll(10);
    expect(scoreCalculator.gameScore(frames)).toEqual(60 - 1);
    // Frame 6
    expect(scoreRecorder.nextInputFrame()).toEqual(6);
    expect(scoreRecorder.nextInputRoll()).toEqual(1);
    frames = scoreRecorder.addRoll(0);
    expect(scoreRecorder.nextInputFrame()).toEqual(6);
    expect(scoreRecorder.nextInputRoll()).toEqual(2);
    frames = scoreRecorder.addRoll(1);
    expect(scoreCalculator.gameScore(frames)).toEqual(61);
    // Frame 7
    expect(scoreRecorder.nextInputFrame()).toEqual(7);
    expect(scoreRecorder.nextInputRoll()).toEqual(1);
    frames = scoreRecorder.addRoll(7);
    expect(scoreRecorder.nextInputFrame()).toEqual(7);
    expect(scoreRecorder.nextInputRoll()).toEqual(2);
    frames = scoreRecorder.addRoll(3);
    expect(scoreCalculator.gameScore(frames)).toEqual(77 - 6);
    // Frame 8
    expect(scoreRecorder.nextInputFrame()).toEqual(8);
    expect(scoreRecorder.nextInputRoll()).toEqual(1);
    frames = scoreRecorder.addRoll(6);
    expect(scoreRecorder.nextInputFrame()).toEqual(8);
    expect(scoreRecorder.nextInputRoll()).toEqual(2);
    frames = scoreRecorder.addRoll(4);
    expect(scoreCalculator.gameScore(frames)).toEqual(97 - 10);
    // Frame 9
    expect(scoreRecorder.nextInputFrame()).toEqual(9);
    expect(scoreRecorder.nextInputRoll()).toEqual(1);
    frames = scoreRecorder.addRoll(10);
    expect(scoreCalculator.gameScore(frames)).toEqual(117 - 10);
    // Frame 10
    expect(scoreRecorder.nextInputFrame()).toEqual(10);
    expect(scoreRecorder.nextInputRoll()).toEqual(1);
    frames = scoreRecorder.addRoll(2);
    expect(scoreRecorder.nextInputFrame()).toEqual(10);
    expect(scoreRecorder.nextInputRoll()).toEqual(2);
    frames = scoreRecorder.addRoll(8);
    expect(scoreRecorder.nextInputFrame()).toEqual(10);
    expect(scoreRecorder.nextInputRoll()).toEqual(3);
    frames = scoreRecorder.addRoll(6);
    expect(scoreCalculator.gameScore(frames)).toEqual(133);


    expect(scoreCalculator.frameScores(frames)[0]).toEqual(5);
    expect(scoreCalculator.frameScores(frames)[1]).toEqual(14 - 5);
    expect(scoreCalculator.frameScores(frames)[2]).toEqual(29 - 14);
    expect(scoreCalculator.frameScores(frames)[3]).toEqual(49 - 29);
    expect(scoreCalculator.frameScores(frames)[4]).toEqual(60 - 49);
    expect(scoreCalculator.frameScores(frames)[5]).toEqual(61 - 60);
    expect(scoreCalculator.frameScores(frames)[6]).toEqual(77 - 61);
    expect(scoreCalculator.frameScores(frames)[7]).toEqual(97 - 77);
    expect(scoreCalculator.frameScores(frames)[8]).toEqual(117 - 97);
    expect(scoreCalculator.frameScores(frames)[9]).toEqual(133 - 117);
  });
}); 