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
    var testFrame;
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

  // describe('#scoreGame', function() {
  //   it('tots up basic scores', function() {
  //     game = [[1,1], [1,2], [1,3], [1,4], [1,5], [1,6], [1,7], [1,8], [2,1], [2,2]]
  //     scorecard.scoreGame(game);
  //     expect(scorecard.scoreGame(game)).toEqual('Test')
  //     expect(scorecard.score).toEqual(51);
  //   });
  // });

});
