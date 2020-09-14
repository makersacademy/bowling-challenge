'use strict';

describe('Scorecard', function(){

  var scorecard;

  beforeEach(function(){
    scorecard = new Scorecard();
  });

  it('starts with 1 frame object', function() {
    expect(scorecard.frames.length).toBe(1);
    expect(scorecard.frames[0]).toBeInstanceOf(Frame);
  });

  describe('Play', function() {
    it('adds new frame object if previous frame complete', function() {
      scorecard.play(10);
      scorecard.play(5);
      expect(scorecard.frames.length).toEqual(2);
    });

    it('adds final frame object for 10th round', function(){
      for(var i=0; i<10; i++) {
        scorecard.play(10);
      }
      expect(scorecard.frames.length).toEqual(10);
      expect(scorecard.frames[9]).toBeInstanceOf(FinalFrame);
    });

    it('does not add a frame if game is over', function(){
      for(var i=0; i<10; i++) {
        scorecard.play(4);
        scorecard.play(3);
      }
      scorecard.play(5);
      expect(scorecard.frames.length).toEqual(10);
    });

    it('updates the score', function() {
      scorecard.play(5);
      expect(scorecard.getRunningTotalUpTo(0)).toEqual(5);
    });
  });

  describe('Scoring situations', function() {
    it('gutter ball game', function() {
      for(var i=0; i<20; i++)  {
        scorecard.play(0);
      }
      expect(scorecard.getFinalScore()).toEqual(0);
    });

    it('7 every round game', function() {
      for(var i=0; i<10; i++) {
        scorecard.play(4);
        scorecard.play(3);
      }
      expect(scorecard.getFinalScore()).toEqual(70);
    });

    it('Spare with 5 then 5 every round', function(){
      for(var i=0; i<21; i++)  {
        scorecard.play(5);
      }
      expect(scorecard.getFinalScore()).toEqual(150);
    });

    it('Strikes every round', function(){
      for(var i=0; i<12; i++)  {
        scorecard.play(10);
      }
      expect(scorecard.getFinalScore()).toEqual(300);
    });
  });
});
