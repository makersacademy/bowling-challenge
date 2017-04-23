console.log('FeatureSpec file has been required correctly')

'use strict';

describe('Feature test:', function() {

  var frame;
  var game;

  beforeEach(function(){
    // frame = jasmine.createSpyObj('frame', ['bowl', 'frameScore', 'addToScore', 'resetFrame']);
    frame = new Frame();
    game = new Game();
  })

  describe('Scoring', function () {
    it('cumulates scores', function () {
      // spyOn(frame, 'bowl').and.returnValue(4);
      // frame.bowl.and.returnValue(4);
      game.bowl(2);
      game.bowl(4);
      game.bowl(5);
      game.bowl(4);
      game.bowl(3);
      game.bowl(3);
      expect(game.getCurrentScore()).toEqual(21)
    });

    it('if first bowl is a strike move to next frame', function () {
      game.bowl(10);
      expect(game.frames[0]).not.toEqual(game.getCurrentFrame());
    });

    xit('cannot bowl more than 10 in a single frame', function () {
      game.bowl(6);
      expect(function() { game.bowl(6); }).toThrowError("Cannot bowl more than 10");
    });

  });

  describe('Bowling twice in a frame:', function () {
    it('score is resets when changing frames', function () {
      game.bowl(4);
      game.bowl(5);
      game.resetFrame();
      expect(game.frames[0]).not.toEqual(game.getCurrentFrame());
    });
  });
});
