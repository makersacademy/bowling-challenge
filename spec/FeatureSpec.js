console.log('FeatureSpec file has been required correctly')

'use strict';

describe('Feature test:', function() {

  var frame;
  var game;

  beforeEach(function(){
    // frame = jasmine.createSpyObj('frame', ['bowl', 'frameScore', 'addToScore']);
    frame = new Frame();
    game = new Game();
  })

  describe('Scoring', function () {
    it('cumulates scores', function () {
      frame.addToScore(4);
      frame.addToScore(5);
      expect(frame.frameScore()).toEqual(9)
    });
  });

  describe('Bowling twice in a frame:', function () {
    it('score is resets when changing frames', function () {
      game.bowl();
      game.bowl();
      game.resetFrame();
      expect(game.frames[0]).not.toEqual(game.getCurrentFrame());
    });
  });
});
