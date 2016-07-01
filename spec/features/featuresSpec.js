'use strict';

describe ('Features', function() {

  var scoreManager;

  beforeEach(function() {
    scoreManager = new ScoreManager;
  });

  it ('score is correct after a spare frame and a non-bounus one', function() {
    scoreManager.roll(9);
    scoreManager.roll(1);
    scoreManager.roll(1);
    scoreManager.roll(1);
    expect(scoreManager.getScore()).toEqual(13);
  });

  it ('score is correct after a strike frame and a non-bounus one', function() {
    scoreManager.roll(10);
    scoreManager.roll(1);
    scoreManager.roll(4);
    expect(scoreManager.getScore()).toEqual(20);
  });

  it ('score is correct after a few frames with strikes/spares 1', function() {
    scoreManager.roll(10);
    scoreManager.roll(1);
    scoreManager.roll(4);
    scoreManager.roll(6);
    scoreManager.roll(4);
    scoreManager.roll(4);
    expect(scoreManager.getScore()).toEqual(38);
  });

  it ('score is correct after a few frames with strikes/spares 2', function() {
    scoreManager.roll(9);
    scoreManager.roll(1);
    scoreManager.roll(10);
    scoreManager.roll(6);
    scoreManager.roll(2);
    scoreManager.roll(4);
    expect(scoreManager.getScore()).toEqual(50);
  });

  it ('perfect game', function() {
    for (let i = 0; i < 12; i++) {
      scoreManager.roll(10);
    }
    expect(scoreManager.getScore()).toEqual(300);
  });

  it ('perfect game', function() {
    for (let i = 0; i < 12; i++) {
      scoreManager.roll(10);
    }
    expect(scoreManager.getScore()).toEqual(300);
  });

  it ('all ones (total score of 20)', function() {
    for (let i = 0; i < 20; i++) {
      scoreManager.roll(1);
    }
    expect(scoreManager.getScore()).toEqual(20);
  });
});
