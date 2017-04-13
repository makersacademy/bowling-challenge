console.log('frameSpec file has been required correctly')

'use strict';

describe('Frame', function (){

  var frame;

  beforeEach(function(){
    frame = new Frame();
  })


  describe('Should be initialized', function () {
    it('with zero score', function (){
      expect(frame.score).toEqual(0);
    });
  });
});
