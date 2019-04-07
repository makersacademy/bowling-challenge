'use strict';

describe('Scorecard', function() {
  var scorecard;
  var frame;
  var game;

  beforeEach(function(){
    scorecard = new Scorecard();
    frame = new Frame(1,2);
  })

  it('frames is empty as default', function() {
    expect(scorecard.frames.length).toEqual(0);
  });

  it('score is 0 as default', function() {
    expect(scorecard.score).toEqual(0);
  });

  describe('#takeFrames', function() {

    it('accepts 10 frames', function() {
      for(var i=0; i < 10; i++){
        scorecard.takeFrames(frame)
      };
      // expect(scorecard.frames).toEqual('Test')
      expect(scorecard.frames.length).toEqual(10);
    });

    it('takes no more than 10 frames', function() {
      for(var i=0; i < 10; i++){
        scorecard.takeFrames(frame)
      };
      scorecard.takeFrames(frame)
      expect(scorecard.frames.length).toEqual(10);
    });

  });

  describe('#scoreGame', function() {
    var scorecard = new Scorecard;
    var frame1 = [2,3]
    it('tots up score', function() {
      scorecard.takeFrames(frame1);
      expect(scorecard.scoreGame()).toEqual(5);
      // expect(scorecard.score).toEqual(5);
    });
  });

});
