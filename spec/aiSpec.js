"use strict";

describe('Ai', function(){
  var ai;

  beforeEach(function(){
    ai = new Ai();
  });

  describe('interaction', function(){
    it('samples an array', function(){
      ai.sassyMessages = ['Message'];
      expect(ai.sassyMessages.sample()).toEqual('Message');
    });

    it('delivers a sassy response', function(){
      spyOn(ai.sassyMessages, 'sample').and.returnValue(ai.sassyMessages[0]);
      expect(ai.sassPlayer()).toEqual('Frame Over');
    });
  });
});
