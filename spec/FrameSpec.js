'use strict';

describe('Frame', function(){
  var frame;

  beforeEach(function(){
    frame = new Frame();
  });
  describe('it counts the score', function(){
    it('each frame starts from zero score in a new game', function(){
      expect(frame.getCurrentScore()).toEqual(0);
    });

    it ('each frame starts with no rolls', function(){
      expect(frame._rolls).toEqual([]);
    });
  });

});
