console.log('FeatureSpec file has been required correctly')

'use strict';

describe('Feature test:', function() {

  var frame;
  var game;

  beforeEach(function(){
    frame = new Frame();//jasmine.createSpyObj('frame', ['bowl']);
    game = new Game();
  })

  describe('Scoring', function () {
    it('cumulates scores', function () {
      frame.addToScore(4);
      frame.addToScore(5);
      expect(frame.score).toEqual(9)
    });
  });

  
});
