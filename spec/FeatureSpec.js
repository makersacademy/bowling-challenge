console.log('FeatureSpec file has been required correctly')

'use strict';

describe('Feature test:', function() {

  var frame;
  var game;

  beforeEach(function(){
    frame = jasmine.createSpyObj('frame', ['bowl', 'frameScore', 'addToScore', 'resetFrame']);
    // frame = new Frame();
    game = new Game();
  })

  describe('Scoring', function () {
    xit('cumulates scores', function () {
      // frame.addToScore(4);
      // frame.addToScore(5);
      // spyOn(frame, 'bowl').and.returnValue(9);
      frame.bowl.and.returnValue(4);
      frame.bowl.and.returnValue(5);
      expect(frame.frameScore()).toEqual(9)
    });

    it('if first bowl is a strike move to next frame', function () {
      game.bowl();
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
