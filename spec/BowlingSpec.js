'use strict';

describe('Bowling', function(){
  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  it('shows count as zero at the start of the game', function(){
    expect(bowling.totalScore).toEqual(0);
  });

  it('shows what frame is played', function(){
    expect(bowling.currentFrame()).toEqual(1);
  });

  it('can create a new frame once the previous one is finished', function() {
    spyOn(bowling, '_randomRoll1').and.returnValue(5);
    bowling.roll1();
    bowling.updateScoreSecond();
    bowling.updateGame();
    expect(bowling.currentFrame()).toEqual(2);
  });

  it('creates another frame object with _newFrame method', function() {
    bowling._newFrame();
    expect(bowling.frames[1].rollOne).toEqual(0);
    expect(bowling.frames[1].rollTwo).toEqual(0);
    expect(bowling.frames[1].score).toEqual(0);
  });

  it('updates frame counter once previous frame completed', function() {
    spyOn(bowling, '_randomRoll1').and.returnValue(5);
    bowling.roll1();
    bowling.updateScoreSecond();
    expect(bowling.frameCounter).toEqual(2);
  });

  it('does not update game after 10 frames are played', function() {
    for(var i = 0; i<11; i++) {
      bowling.frameCounter++;
      bowling.updateGame();
    }
    expect(bowling.frames.length).toEqual(10);
  });

  describe('when updating score', function() {
    beforeEach(function() {
      spyOn(bowling, '_randomRoll1').and.returnValue(3);
      bowling.roll1();
      bowling.updateScoreFirst();
      spyOn(bowling, '_randomRoll2').and.returnValue(5);
      bowling.roll2();
      bowling.updateScoreSecond();
    })

    it('resets current roll to zero once score is updated', function() {
      expect(bowling._currentRoll).toEqual(0);
    });

    it('updates frame score when ball is rolled on first roll', function() {
      expect(bowling.frameRollOne(1)).toEqual(3);
      expect(bowling.frameScore(1)).toEqual(8);
    });

    it('updates frame and total score after second roll - ignoring strike at the moment', function() {
      expect(bowling.currentFrameRollTwo()).toEqual(5);
      expect(bowling.frameScore(1)).toEqual(8);
      expect(bowling.totalScore).toEqual(8);
    })

    it('can play several frames', function() {
      bowling.updateGame();
      bowling._randomRoll1.and.returnValue(6);
      bowling.roll1();
      bowling.updateScoreFirst();
      expect(bowling.frameScore(2)).toEqual(6);
      bowling._randomRoll2.and.returnValue(2);
      bowling.roll2();
      bowling.updateScoreSecond();
      expect(bowling.frameScore(2)).toEqual(8);
      expect(bowling.totalScore).toEqual(16);
    });
  });

  describe('when playing a game counting spares', function(){
    beforeEach(function() {
      spyOn(bowling, '_randomRoll1').and.returnValue(3);
      bowling.roll1();
      bowling.updateScoreFirst();
      spyOn(bowling, '_randomRoll2').and.returnValue(7);
      bowling.roll2();
      bowling.updateScoreSecond();
      bowling.updateGame();
      bowling._randomRoll1.and.returnValue(1);
      bowling.roll1();
      bowling.updateScoreFirst();
      bowling._randomRoll2.and.returnValue(2);
      bowling.roll2();
      bowling.updateScoreSecond();
    });

    it('adds bonus points for a spare', function() {
      expect(bowling.totalScore).toEqual(14);
    });

    it('updates frame score for perevious frame with bonus points', function() {
      expect(bowling.frameScore(1)).toEqual(11);
    });
  });

  describe('when playing a game counting strikes', function(){
    beforeEach(function() {
      spyOn(bowling, '_randomRoll1').and.returnValue(10);
      bowling.roll1();
      bowling.updateScoreFirst();
      bowling.updateGame();
      bowling._randomRoll1.and.returnValue(1);
      bowling.roll1();
      bowling.updateScoreFirst();
      spyOn(bowling, '_randomRoll2').and.returnValue(2);
      bowling.roll2();
      bowling.updateScoreSecond();
    });

    it('returns the correct score for the frame after hitting a strike', function() {
      expect(bowling.frameScore(1)).toEqual(13);
    })

    it('returns the correct total score after hitting a strike', function() {
      expect(bowling.totalScore).toEqual(16);
    })
  })
});
