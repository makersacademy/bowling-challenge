'use strict';

describe('Scorecard', function(){

  var scorecard;
  var frame;
  var finalframe;

  beforeEach(function(){
    scorecard = new Scorecard();
    frame = jasmine.createSpyObj('airport',['clearForLanding', 'clearForTakeOff']);
  });

  it('starts with 1 frame object', function() {
    expect(scorecard.frames.length).toBe(1);
    expect(scorecard.frames[0]).toBeInstanceOf(Frame);
  });

  describe('Play', function() {
    it('adds new frame object if previous frame complete', function() {
      scorecard.play(10);
      scorecard.play(5);
      expect(scorecard.frames.length).toBe(2);
    });

    it('updates the score', function() {
      scorecard.play(5);
      expect(scorecard.getScore()).toEqual(5);
    });
  });

  describe('Scoring situations', function() {
    it('gutter ball game', function() {
      for(var i=0; i<20; i++)  {
        scorecard.play(0);
      }
      expect(scorecard.getScore()).toEqual(0);
    });

    it('7 every round game', function() {
      for(var i=0; i<10; i++) {
        scorecard.play(4);
        scorecard.play(3);
      }
      expect(scorecard.getScore()).toEqual(70);
    });
  });
});
