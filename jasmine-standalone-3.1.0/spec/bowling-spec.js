'use strict';

describe('Bowling', function() {
 var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  it('has a function that returns the current score of a frame and it starts with zero', function(){
    expect(bowling.currentFrameScore).toEqual(0);
  });

  it('has a total score which starts with zero', function() {
    expect(bowling.totalScore).toEqual(0);
  });


  it('has a counter for the frames that starts at 1', function (){
    expect(bowling.frameCount).toEqual(1);
  });

  it('has a counter that counts the roll in the frame that starts at 1', function () {
    expect(bowling.frameRoll).toEqual(1);
  });

  it('counts the score of a roll in a frame', function() {
    bowling.countScore(3);
    expect(bowling.currentFrameScore).toEqual(3);
  });

  it('throws an error if the score is < 0 or score > 10', function () {
    expect(function() {
      bowling.validScore(11);
    }).toThrowError('Wrong score number');
  });

  it('throws an error if the score is outside the possible score limit during the first roll', function () {
    expect(function (){bowling.validScore(19)}).toThrowError('Wrong score number');

});

  it('throws an error if the score is outside the possible score limit during the second roll', function () {
      bowling.validScore(5);
      expect(function() {
        bowling.validScoreSecondMove(18);
      }).toThrowError('Wrong score number');

  });


  it ('returns the total score of a frame', function () {
    bowling.countScore(5);
    bowling.countScore(3);
    expect(bowling.totalScore).toEqual(8);
  });

  it('returns a string note if the player scores a special roll(gutter ball/strike/spare', function(){
    expect(bowling.displayNote('strike')).toEqual('Congratulations you scored a strike');

  });

  it('returns a string note if the player scores a special roll(gutter ball/strike/spare', function(){
    expect(bowling.displayNote('notastrikeorspare')).toEqual('Bad luck you rolled a gutter ball');

  });

  it('applies bonus rolls to a frame if a strike is rolled', function() {
    bowling.validScore(10);
    expect(bowling.bonusRoll).toEqual(1);

  });



});
