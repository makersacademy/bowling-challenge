'use strict';

describe('BowlingScorecard', function() {

  var bowlingScorecard;

  beforeEach(function() {
    bowlingScorecard = new BowlingScorecard();
  });

  it('score starts at 0', function() {
    expect(bowlingScorecard.getCurrentScore()).toEqual(0);
  });

  it('has a frame counter', function() {
    expect(bowlingScorecard.frameCounter).toEqual(0);
  });

  it('holds a frame', function() {
    bowlingScorecard.setNewFrame(2, 3)
    expect(bowlingScorecard.frame instanceof Frame).toBeTruthy();
    expect(bowlingScorecard.frameCounter).toEqual(1);
    expect(bowlingScorecard.frame.setBowl1Score()).toEqual(2);
    expect(bowlingScorecard.frame.setBowl2Score()).toEqual(3);
    });
  
  it('holds a final frame', function() {
    for (var i = 0; i < 10; i++) {
      bowlingScorecard.setNewFrame(4, 6, 8);
    };
    expect(bowlingScorecard.frame instanceof FinalFrame).toBeTruthy();
    expect(bowlingScorecard.frameCounter).toEqual(10);
    expect(bowlingScorecard.frame.setBowl1Score()).toEqual(4);
    expect(bowlingScorecard.frame.setBowl2Score()).toEqual('/');
    expect(bowlingScorecard.frame.setBowl3Score()).toEqual(8);
    });

  it('updates the score array', function() {
    bowlingScorecard.setNewFrame(2, 3);
    bowlingScorecard.updateScoreArray();
    expect(bowlingScorecard.scoreArray.length).toEqual(2);
  });

  it('updates score array to hold ten frames', function () {
    for (var i = 0; i < 9; i++) {
      bowlingScorecard.setNewFrame(4, 6);
      bowlingScorecard.updateScoreArray();
    }
    bowlingScorecard.setNewFrame(4, 6, 8);
    bowlingScorecard.updateScoreArray();
    expect(bowlingScorecard.scoreArray.length).toEqual(21);
    expect(bowlingScorecard.scoreArray.slice(-1)[0]).toEqual(8);
  });

  it('score array holds strikes as well as spares and numbers', function() {
    for (var i = 0; i < 4; i++) {
      bowlingScorecard.setNewFrame(10);
      bowlingScorecard.updateScoreArray();
      bowlingScorecard.setNewFrame(3, 5);
      bowlingScorecard.updateScoreArray();
    }
    bowlingScorecard.setNewFrame(4, 6);
    bowlingScorecard.updateScoreArray();
    bowlingScorecard.setNewFrame(10, 10, 10);
    bowlingScorecard.updateScoreArray();
    expect(bowlingScorecard.scoreArray.length).toEqual(17);
    expect(bowlingScorecard.scoreArray[0]).toEqual('X');
    expect(bowlingScorecard.scoreArray[1]).toEqual(3);
    expect(bowlingScorecard.scoreArray[13]).toEqual('/');
    expect(bowlingScorecard.scoreArray.slice(-1)[0]).toEqual('X');
  });

  it('calculates a game score', function () {
    bowlingScorecard.setNewFrame(3, 5);
    bowlingScorecard.updateGameScore();
    expect(bowlingScorecard.getCurrentScore()).toEqual(8)
  });

  it('calculates a game score including spare bonus', function () {
    bowlingScorecard.setNewFrame(4, 6);
    bowlingScorecard.updateGameScore();
    bowlingScorecard.setNewFrame(3, 5);
    bowlingScorecard.updateGameScore();
    expect(bowlingScorecard.getCurrentScore()).toEqual(21)
  });

});

describe('Frame', function() {

  var strike;
  var spare;
  var frame;

  beforeEach(function() {
    frame = new Frame(3, 5);
    strike = new Frame(10);
    spare = new Frame(6, 4);
  });

  it('gets a bowling score', function() {
    expect(strike.setBowl1Score()).toEqual('X');
    expect(spare.setBowl1Score()).toEqual(6);
    expect(spare.setBowl2Score()).toEqual('/');
    expect(frame.setBowl2Score()).toEqual(5);
  });
});

describe('FinalFrame', function() {

  var strike;
  var spare;
  var frame;

  beforeEach(function() {
    strike = new FinalFrame(10, 10, 10);
    spare = new FinalFrame(6, 4, 2);
    frame = new FinalFrame(3, 5);
  });

  it('gets a bowling score', function() {
    expect(strike.setBowl1Score()).toEqual('X');
    expect(strike.setBowl2Score()).toEqual('X');
    expect(strike.setBowl3Score()).toEqual('X');
    expect(spare.setBowl1Score()).toEqual(6);
    expect(spare.setBowl2Score()).toEqual('/');
    expect(spare.setBowl3Score()).toEqual(2);
    expect(frame.setBowl1Score()).toEqual(3);
    expect(frame.setBowl2Score()).toEqual(5);
  });
});