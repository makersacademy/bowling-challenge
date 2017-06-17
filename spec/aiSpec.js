"use strict";

describe('Ai', function(){
  var ai;

  beforeEach(function(){
    ai = new Ai();
  });

  describe('interaction', function(){
    it('samples an array', function(){
      var sassyGameOverMessages = ['Message'];
      expect(sassyGameOverMessages.sample()).toEqual('Message');
    });

    it('delivers a sassy response', function(){
      spyOn(sassyGameOverMessages, 'sample').and.returnValue(sassyGameOverMessages[0]);
      expect(ai.gameOver()).toEqual('Frame Over');
    });
  });
});
